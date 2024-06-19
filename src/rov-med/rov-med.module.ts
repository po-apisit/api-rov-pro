import { Module } from '@nestjs/common';
import { RovMedService } from './rov-med.service';
import { RovMedController } from './rov-med.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RovMed, RovMedSchema } from './schema/rov-med.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: RovMed.name, schema: RovMedSchema }])],
  controllers: [RovMedController],
  providers: [RovMedService],
})
export class RovMedModule {}
