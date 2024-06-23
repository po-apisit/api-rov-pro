import { PartialType } from '@nestjs/mapped-types';
import { CreateRovNewCatagorieDto } from './create-rov-new-catagorie.dto';

export class UpdateRovNewCatagorieDto extends PartialType(CreateRovNewCatagorieDto) {}
