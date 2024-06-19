import { Module } from '@nestjs/common';
import { RovHeroService } from './rov-hero.service';
import { RovHeroController } from './rov-hero.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RovHero, RovHeroSchema } from './schema/rov-hero.schema';
import { RovSkill, RovSkillSchema } from './schema/rov-skill.schema';

@Module({
  imports:[MongooseModule.forFeature([
     { name: RovHero.name, schema: RovHeroSchema },
     { name: RovSkill.name, schema: RovSkillSchema }
    ])],
  controllers: [RovHeroController],
  providers: [RovHeroService],
})
export class RovHeroModule {}
