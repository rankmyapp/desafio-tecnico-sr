import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PurchaseType } from 'src/types';

export type PurchaseDocument = HydratedDocument<Purchase>;

@Schema()
export class Purchase {
  @Prop()
  payment_type: PurchaseType;

  @Prop()
  userId: string;

  @Prop()
  ticketId: string;
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);
