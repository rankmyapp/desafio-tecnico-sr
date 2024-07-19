import { IsEnum, IsString } from 'class-validator';
import { PurchaseType } from 'src/types';

export class PurchaseTicket {
  @IsString()
  ticketId: string;

  @IsString()
  userId: string;

  @IsEnum(PurchaseType)
  type: PurchaseType;
}

export class PurchaseSuccess {
  ticketId: string;
  userId: string;
  payment_type: PurchaseType;
}
