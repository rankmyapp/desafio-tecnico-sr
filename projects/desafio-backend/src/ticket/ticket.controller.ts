import { Body, Controller, Get, Post } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { PurchaseTicket } from './dto/purchase-ticket.dto';

@Controller('tickets')
export class TicketController {
  constructor(private readonly service: TicketService) {}

  @Post('buy')
  purchaseTicket(@Body() data: PurchaseTicket) {
    return this.service.purchaseTicket(data);
  }

  @Get('catalog')
  findAll() {
    return this.service.findAll();
  }
}
