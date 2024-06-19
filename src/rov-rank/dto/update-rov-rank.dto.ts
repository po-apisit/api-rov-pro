import { PartialType } from '@nestjs/mapped-types';
import { CreateRovRankDto } from './create-rov-rank.dto';

export class UpdateRovRankDto extends PartialType(CreateRovRankDto) {}
