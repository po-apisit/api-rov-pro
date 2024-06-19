import { Module } from '@nestjs/common';
import { RovSeasonService } from './rov-season.service';
import { RovSeasonController } from './rov-season.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RovSeason, RovSeasonSchema } from './schema/rov-season.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: RovSeason.name, schema: RovSeasonSchema }])],
  controllers: [RovSeasonController],
  providers: [RovSeasonService],
})
export class RovSeasonModule {}
