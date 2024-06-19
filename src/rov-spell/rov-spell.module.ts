import { Module } from '@nestjs/common';
import { RovSpellService } from './rov-spell.service';
import { RovSpellController } from './rov-spell.controller';

@Module({
  controllers: [RovSpellController],
  providers: [RovSpellService],
})
export class RovSpellModule {}
