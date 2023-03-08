import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

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
}
