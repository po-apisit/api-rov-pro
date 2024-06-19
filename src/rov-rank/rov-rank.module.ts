import { Module } from '@nestjs/common';
import { RovRankService } from './rov-rank.service';
import { RovRankController } from './rov-rank.controller';

@Module({
  controllers: [RovRankController],
  providers: [RovRankService],
})
export class RovRankModule {}
