import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Order } from 'src/order/models/order.model';

interface UserAttr {
  name: string;
  email: string;
  password: string;
  phone_number: string;
  location: string;
  is_admin: boolean;
  is_active: boolean;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_admin: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @HasMany(() => Order)
  order: Order[];
}
