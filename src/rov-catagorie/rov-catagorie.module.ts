import { Module } from '@nestjs/common';
import { RovCatagorieService } from './rov-catagorie.service';
import { RovCatagorieController } from './rov-catagorie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RovCatagorie, RovCatagorieSchema } from './schema/rov-catagorie.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: RovCatagorie.name, schema:RovCatagorieSchema}])],
  controllers: [RovCatagorieController],
  providers: [RovCatagorieService],
})
export class RovCatagorieModule {}
