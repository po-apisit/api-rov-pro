import { PartialType } from '@nestjs/mapped-types';
import { CreateRovArrangeDto } from './create-rov-arrange.dto';

export class UpdateRovArrangeDto extends PartialType(CreateRovArrangeDto) {}
