import { Module } from '@nestjs/common';
import { RovHeroTopService } from './rov-hero-top.service';
import { RovHeroTopController } from './rov-hero-top.controller';

@Module({
  controllers: [RovHeroTopController],
  providers: [RovHeroTopService],
})
export class RovHeroTopModule {}
