import { PartialType } from '@nestjs/mapped-types';
import { CreateRovHeroTopDto } from './create-rov-hero-top.dto';

export class UpdateRovHeroTopDto extends PartialType(CreateRovHeroTopDto) {}
