import { PartialType } from '@nestjs/mapped-types';
import { CreateRovSpellDto } from './create-rov-spell.dto';

export class UpdateRovSpellDto extends PartialType(CreateRovSpellDto) {}
