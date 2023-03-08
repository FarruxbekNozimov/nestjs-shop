import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get a user' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a user' })
  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @ApiOperation({ summary: 'Update user' })
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    await this.usersService.update(id, user);
    return this.usersService.findOne(id);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.usersService.remove(id);
  }
}
