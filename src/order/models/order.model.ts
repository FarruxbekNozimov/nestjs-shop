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

@Table({ tableName: 'orders' })
export class Order extends Model<Order, OrderAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Equipment)
  @Column({ type: DataType.INTEGER })
  equipment_id: number;

  @BelongsTo(() => Equipment)
  equipment: Equipment[];

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;

  @BelongsTo(() => User)
  user: User[];

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: Date.now(),
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
