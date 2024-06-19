import { Module } from '@nestjs/common';
import { RovGloriousService } from './rov-glorious.service';
import { RovGloriousController } from './rov-glorious.controller';

@Module({
  controllers: [RovGloriousController],
  providers: [RovGloriousService],
})
export class RovGloriousModule {}
