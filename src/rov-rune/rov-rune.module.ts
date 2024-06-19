import { Module } from '@nestjs/common';
import { RovRuneService } from './rov-rune.service';
import { RovRuneController } from './rov-rune.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RovRune, RovRuneSchema } from './schema/rov-rune.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: RovRune.name, schema: RovRuneSchema}])],
  controllers: [RovRuneController],
  providers: [RovRuneService],
})
export class RovRuneModule {}
