import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Equipment } from 'src/equipment/models/equipment.model';
import { User } from 'src/users/models/user.model';

interface OrderAttr {
  equipment_id: number;
  user_id: number;
  order_date: Date;
  amount: number;
  total_price: number;
}

@Table({ tableName: 'order' })
export class Order extends Model<Order, OrderAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Equipment)
  @Column({ type: DataType.DECIMAL })
  equipment_id: number;

  @BelongsTo(() => Equipment)
  equipment: [];

  @ForeignKey(() => User)
  @Column({ type: DataType.DECIMAL })
  user_id: number;

  @BelongsTo(() => User)
  user: [];

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  order_date: Date;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  amount: number;

  @Column({ type: DataType.DECIMAL })
  total_price: number;
}
