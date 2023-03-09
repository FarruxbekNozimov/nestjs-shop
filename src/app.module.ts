import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { EquipmentModule } from './equipment/equipment.module';
import { User } from './users/models/user.model';
import { AuthModule } from './auth/auth.module';
import { Equipment } from './equipment/models/equipment.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [User, Equipment],
      autoLoadModels: true,
      logging: false,
    }),
    UsersModule,
    EquipmentModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
