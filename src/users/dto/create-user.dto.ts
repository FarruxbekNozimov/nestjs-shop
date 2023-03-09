import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Toshmat' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'tosh@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Uzbek!$t0n' })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @ApiProperty({ example: '+998777777777' })
  @IsPhoneNumber()
  phone_number: string;

  @ApiProperty({ example: 'Shirin str.' })
  @IsString()
  location: string;

  @ApiProperty({ example: 'true/false' })
  is_admin: boolean;

  @ApiProperty({ example: 'true/false' })
  is_active: boolean;
}
