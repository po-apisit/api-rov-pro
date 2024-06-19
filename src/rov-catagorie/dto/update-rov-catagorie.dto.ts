import { PartialType } from '@nestjs/mapped-types';
import { CreateRovCatagorieDto } from './create-rov-catagorie.dto';

export class UpdateRovCatagorieDto extends PartialType(CreateRovCatagorieDto) {}
