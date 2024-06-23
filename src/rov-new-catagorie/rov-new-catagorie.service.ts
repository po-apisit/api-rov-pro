import { Injectable } from '@nestjs/common';
import { CreateRovNewCatagorieDto } from './dto/create-rov-new-catagorie.dto';
import { UpdateRovNewCatagorieDto } from './dto/update-rov-new-catagorie.dto';

@Injectable()
export class RovNewCatagorieService {
  create(createRovNewCatagorieDto: CreateRovNewCatagorieDto) {
    return 'This action adds a new rovNewCatagorie';
  }

  findAll() {
    return `This action returns all rovNewCatagorie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovNewCatagorie`;
  }

  update(id: number, updateRovNewCatagorieDto: UpdateRovNewCatagorieDto) {
    return `This action updates a #${id} rovNewCatagorie`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovNewCatagorie`;
  }
}
