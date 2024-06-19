import { PartialType } from '@nestjs/mapped-types';
import { CreateRovGloriousDto } from './create-rov-glorious.dto';

export class UpdateRovGloriousDto extends PartialType(CreateRovGloriousDto) {}
