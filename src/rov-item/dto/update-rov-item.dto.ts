import { PartialType } from '@nestjs/mapped-types';
import { CreateRovItemDto } from './create-rov-item.dto';

export class UpdateRovItemDto extends PartialType(CreateRovItemDto) {}
