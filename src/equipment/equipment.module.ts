import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.model';

@Module({
  controllers: [EquipmentController],
  providers: [EquipmentService]
})
export class EquipmentModule {}
