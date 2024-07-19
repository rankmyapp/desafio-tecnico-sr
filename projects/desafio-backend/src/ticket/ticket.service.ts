import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Purchase } from 'src/repositories/purchase.schema';
import { Ticket } from 'src/repositories/ticket.schema';
import { PurchaseSuccess, PurchaseTicket } from './dto/purchase-ticket.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name) private ticketModel: Model<Ticket>,
    @InjectModel(Purchase.name) private purchaseModel: Model<Purchase>,
    @Inject('TICKET_SERVICE') private client: ClientProxy,
  ) {}

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().exec();
  }

  async purchaseTicket(dto: PurchaseTicket): Promise<PurchaseSuccess> {
    const ticket = await this.ticketModel.findOne({ _id: dto.ticketId }).exec();

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    if (!ticket.quantity) {
      throw new BadRequestException('Ticket sold out');
    }

    const purchase = await this.purchaseModel.create({
      ticketId: ticket._id,
      userId: dto.userId,
      payment_type: dto.type,
    });

    await this.ticketModel
      .updateOne(
        { _id: ticket._id },
        {
          $set: {
            quantity: ticket.quantity - 1,
          },
        },
      )
      .exec();

    await firstValueFrom(this.client.emit('validate-purchase', purchase));

    return {
      ticketId: ticket._id.toHexString(),
      userId: purchase.userId,
      payment_type: purchase.payment_type,
    };
  }
}
