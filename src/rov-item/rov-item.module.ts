import { Module } from '@nestjs/common';
import { RovItemService } from './rov-item.service';
import { RovItemController } from './rov-item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RovItem, RovItemSchema } from './entities/rov-item.entity';

@Module({
  imports:[MongooseModule.forFeature([{ name: RovItem.name, schema:RovItemSchema}])],
  controllers: [RovItemController],
  providers: [RovItemService],
  exports: [RovItemService]
})
export class RovItemModule {}
