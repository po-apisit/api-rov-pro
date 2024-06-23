import { Injectable } from '@nestjs/common';
import { CreateRovItemCatagorieDto } from './dto/create-rov-item-catagorie.dto';
import { UpdateRovItemCatagorieDto } from './dto/update-rov-item-catagorie.dto';

@Injectable()
export class RovItemCatagorieService {
  create(createRovItemCatagorieDto: CreateRovItemCatagorieDto) {
    return 'This action adds a new rovItemCatagorie';
  }

  findAll() {
    return `This action returns all rovItemCatagorie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovItemCatagorie`;
  }

  update(id: number, updateRovItemCatagorieDto: UpdateRovItemCatagorieDto) {
    return `This action updates a #${id} rovItemCatagorie`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovItemCatagorie`;
  }
}
