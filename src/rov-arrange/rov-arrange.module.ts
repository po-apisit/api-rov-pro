import { Module } from '@nestjs/common';
import { RovArrangeService } from './rov-arrange.service';
import { RovArrangeController } from './rov-arrange.controller';

@Module({
  controllers: [RovArrangeController],
  providers: [RovArrangeService],
})
export class RovArrangeModule {}
