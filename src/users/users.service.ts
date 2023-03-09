import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { ActivateUserDto } from './dto/activate-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userRepo: typeof User) {}
  async findAll(): Promise<User[]> {
    return this.userRepo.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepo.findByPk(id);
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepo.findOne({ where: { email } });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepo.create(createUserDto);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(updateUserDto, { where: { id } });
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async adminUser(id: number) {
    const user = await this.findOne(id);
    if (!user)
      throw new HttpException('Foydalanuvchi  topilmadi', HttpStatus.NOT_FOUND);
    user.is_admin = true;
    await user.save();
    return user;
  }

  async userUser(id: number) {
    const user = await this.findOne(id);
    if (!user)
      throw new HttpException('Foydalanuvchi  topilmadi', HttpStatus.NOT_FOUND);
    user.is_admin = false;
    await user.save();
    return user;
  }

  async activeUser(id: number) {
    const user = await this.findOne(id);
    if (!user)
      throw new HttpException('Foydalanuvchi  topilmadi', HttpStatus.NOT_FOUND);
    user.is_active = true;
    await user.save();
    return user;
  }

  async deactiveUser(id: number) {
    const user = await this.userRepo.findByPk(id);
    if (!user)
      throw new HttpException('Foydalanuvchi  topilmadi', HttpStatus.NOT_FOUND);
    user.is_active = false;
    await user.save();
    return user;
  }
}
