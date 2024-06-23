import { PartialType } from '@nestjs/mapped-types';
import { CreateRovHeroTableDto } from './create-rov-hero-table.dto';

export class UpdateRovHeroTableDto extends PartialType(CreateRovHeroTableDto) {}
