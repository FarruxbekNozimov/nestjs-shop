import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface EquipmentAttr {
  name: string;
  price: string;
  image: string;
  description: string;
  is_active: boolean;
}

@Table({ tableName: 'equipment' })
export class Equipment extends Model<Equipment, EquipmentAttr> {
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
    allowNull: false,
  })
  price: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  // @HasMany(() => Product)
  //   products: Product[];
}
