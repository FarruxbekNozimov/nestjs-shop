import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './models/order.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/models/user.model';
import { Equipment } from 'src/equipment/models/equipment.model';

@Module({
  imports: [SequelizeModule.forFeature([Order, User, Equipment])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
