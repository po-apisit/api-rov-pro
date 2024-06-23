import { PartialType } from '@nestjs/mapped-types';
import { CreateRovNewDto } from './create-rov-new.dto';

export class UpdateRovNewDto extends PartialType(CreateRovNewDto) {}
