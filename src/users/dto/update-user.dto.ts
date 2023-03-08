import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'Toshmat' })
  name?: string;

  @ApiProperty({ example: 'tosh@gmail.com' })
  @IsEmail()
  email?: string;

  @ApiProperty({ example: 'Uzbek!$t0n' })
  @IsStrongPassword()
  password?: string;
}
