import { PartialType } from '@nestjs/mapped-types';
import { CreateRovNewContentDto } from './create-rov-new-content.dto';

export class UpdateRovNewContentDto extends PartialType(CreateRovNewContentDto) {}
