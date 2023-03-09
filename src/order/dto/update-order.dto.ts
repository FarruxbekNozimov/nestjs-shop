import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateOrderDto {
  @ApiProperty({ example: 'Velosiped' })
  @IsNotEmpty()
  equipment_id: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  user_id: number;

  @ApiProperty({ example: '3' })
  order_date: Date;

  @ApiProperty({ example: '10' })
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ example: '19000' })
  @IsNotEmpty()
  total_price: number;
}
