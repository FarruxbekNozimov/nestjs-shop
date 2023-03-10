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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @ApiOperation({ summary: 'Update user' })
  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    await this.usersService.updateUser(id, updateUserDto);
    return this.usersService.findOne(id);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    const user = await this.usersService.deleteUser(id);
    return user;
  }

  @ApiOperation({ summary: 'Admin role to user' })
  @Post('admin/:id')
  async adminUser(@Param('id') id: number) {
    const user = await this.usersService.adminUser(id);
    return user;
  }

  @ApiOperation({ summary: 'Disable admin role to user' })
  @Post('noadmin/:id')
  async userUser(@Param('id') id: number) {
    const user = await this.usersService.userUser(id);
    return user;
  }

  @ApiOperation({ summary: 'Active user' })
  @Post('active/:id')
  async activeUser(@Param('id') id: number) {
    const user = await this.usersService.activeUser(id);
    return user;
  }

  @ApiOperation({ summary: 'Deactive user' })
  @Post('deactive/:id')
  async deactiveUser(@Param('id') id: number) {
    const user = await this.usersService.deactiveUser(id);
    return user;
  }
}
