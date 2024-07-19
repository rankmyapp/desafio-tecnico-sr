import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from 'src/repositories/ticket.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Purchase, PurchaseSchema } from 'src/repositories/purchase.schema';

@Module({
  providers: [TicketService],
  controllers: [TicketController],
  imports: [
    MongooseModule.forFeature([
      { name: Ticket.name, schema: TicketSchema },
      { name: Purchase.name, schema: PurchaseSchema },
    ]),
    ClientsModule.register([
      {
        name: 'TICKET_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'validate-purchase',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
})
export class TicketModule {}
