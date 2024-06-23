import { Module } from '@nestjs/common';
import { RovItemCatagorieService } from './rov-item-catagorie.service';
import { RovItemCatagorieController } from './rov-item-catagorie.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { RovItemCatagorie, RovItemCatagorieSchema } from './entities/rov-item-catagorie.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:RovItemCatagorie.name, schema:RovItemCatagorieSchema}])],
  controllers: [RovItemCatagorieController],
  providers: [RovItemCatagorieService],
  exports: [RovItemCatagorieService]
})
export class RovItemCatagorieModule {}
