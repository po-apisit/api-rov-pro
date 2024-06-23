import { PartialType } from '@nestjs/mapped-types';
import { CreateRovItemCatagorieDto } from './create-rov-item-catagorie.dto';

export class UpdateRovItemCatagorieDto extends PartialType(CreateRovItemCatagorieDto) {}
