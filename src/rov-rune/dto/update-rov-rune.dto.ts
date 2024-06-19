import { PartialType } from '@nestjs/mapped-types';
import { CreateRovRuneDto } from './create-rov-rune.dto';

export class UpdateRovRuneDto extends PartialType(CreateRovRuneDto) {}
