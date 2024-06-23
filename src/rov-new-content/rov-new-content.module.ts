import { Module } from '@nestjs/common';
import { RovNewContentService } from './rov-new-content.service';
import { RovNewContentController } from './rov-new-content.controller';

@Module({
  controllers: [RovNewContentController],
  providers: [RovNewContentService],
})
export class RovNewContentModule {}
