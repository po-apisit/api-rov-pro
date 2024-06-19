import { PartialType } from '@nestjs/mapped-types';
import { CreateRovSeasonDto } from './create-rov-season.dto';

export class UpdateRovSeasonDto extends PartialType(CreateRovSeasonDto) {}
