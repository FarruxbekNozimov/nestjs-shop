import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateEquipmentDto {
  @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
  @IsNotEmpty()
  @IsString()
  price: string;

  @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
  @IsNotEmpty()
  @IsUrl()
  image: string;

  @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
  @IsNotEmpty()
  description: string;
}
