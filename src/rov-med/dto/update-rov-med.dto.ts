import { PartialType } from '@nestjs/mapped-types';
import { CreateRovMedDto } from './create-rov-med.dto';

export class UpdateRovMedDto extends PartialType(CreateRovMedDto) {}
