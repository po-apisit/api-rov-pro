import { Module } from '@nestjs/common';
import { RovHeroTableService } from './rov-hero-table.service';
import { RovHeroTableController } from './rov-hero-table.controller';

@Module({
  controllers: [RovHeroTableController],
  providers: [RovHeroTableService],
})
export class RovHeroTableModule {}
