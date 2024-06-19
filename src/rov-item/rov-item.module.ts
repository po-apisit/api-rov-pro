import { Module } from '@nestjs/common';
import { RovItemService } from './rov-item.service';
import { RovItemController } from './rov-item.controller';

@Module({
  controllers: [RovItemController],
  providers: [RovItemService],
})
export class RovItemModule {}
