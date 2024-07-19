import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TicketType } from 'src/types';

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
  @Prop()
  type: TicketType;

  @Prop()
  price: number;

  @Prop()
  quantity: number;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
