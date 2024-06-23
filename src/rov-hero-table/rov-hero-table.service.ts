import { Injectable } from '@nestjs/common';
import { CreateRovHeroTableDto } from './dto/create-rov-hero-table.dto';
import { UpdateRovHeroTableDto } from './dto/update-rov-hero-table.dto';

@Injectable()
export class RovHeroTableService {
  create(createRovHeroTableDto: CreateRovHeroTableDto) {
    return 'This action adds a new rovHeroTable';
  }

  findAll() {
    return `This action returns all rovHeroTable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovHeroTable`;
  }

  update(id: number, updateRovHeroTableDto: UpdateRovHeroTableDto) {
    return `This action updates a #${id} rovHeroTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovHeroTable`;
  }
}
