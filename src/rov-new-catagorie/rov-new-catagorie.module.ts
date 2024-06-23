import { Module } from '@nestjs/common';
import { RovNewCatagorieService } from './rov-new-catagorie.service';
import { RovNewCatagorieController } from './rov-new-catagorie.controller';

@Module({
  controllers: [RovNewCatagorieController],
  providers: [RovNewCatagorieService],
})
export class RovNewCatagorieModule {}
