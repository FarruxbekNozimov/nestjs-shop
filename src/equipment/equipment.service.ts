import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Equipment } from './models/equipment.model';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipment)
    private readonly equipmentModel: typeof Equipment,
  ) {}

  async findAll(): Promise<Equipment[]> {
    return this.equipmentModel.findAll();
  }

  async findOne(id: number): Promise<Equipment> {
    return this.equipmentModel.findByPk(id);
  }

  async create(updateEquipmentDto: UpdateEquipmentDto): Promise<Equipment> {
    return this.equipmentModel.create(updateEquipmentDto);
  }

  async update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentModel.update(updateEquipmentDto, { where: { id } });
  }

  async remove(id: number): Promise<void> {
    const equipment = await this.findOne(id);
    await equipment.destroy();
  }
}
