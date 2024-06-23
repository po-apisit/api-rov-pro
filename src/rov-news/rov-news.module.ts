import { Module } from '@nestjs/common';
import { RovNewsService } from './rov-news.service';
import { RovNewsController } from './rov-news.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RovNew, RovNewSchema } from './entities/rov-new.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:RovNew.name, schema:RovNewSchema}])],
  controllers: [RovNewsController],
  providers: [RovNewsService],
})
export class RovNewsModule {}
