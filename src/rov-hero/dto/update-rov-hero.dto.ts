import { PartialType } from '@nestjs/mapped-types';
import { CreateRovHeroDto } from './create-rov-hero.dto';

export class UpdateRovHeroDto extends PartialType(CreateRovHeroDto) {}
