import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private readonly orerRepo: typeof Order) {}
  async findAll(): Promise<Order[]> {
    const orders = await this.orerRepo.findAll({ include: { all: true } });
    return orders;
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.orerRepo.findByPk(id, { include: { all: true } });
    return order;
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orerRepo.create(createOrderDto);
  }

  async updateOrder(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.orerRepo.update(updateOrderDto, { where: { id } });
    return order;
  }

  async deleteOrder(id: number) {
    const order = await this.orerRepo.destroy({ where: { id } });
    return order;
  }
}
