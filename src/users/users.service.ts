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
    const users = await this.userRepo.findAll({ include: { all: true } });
    return users;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepo.findByPk(id);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepo.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepo.create(createUserDto);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.update(updateUserDto, { where: { id } });
    return user;
  }

  async deleteUser(id: number) {
    const user = await this.userRepo.destroy({ where: { id } });
    return user;
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
