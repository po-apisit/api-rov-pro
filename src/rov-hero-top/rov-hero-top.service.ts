import { Injectable } from '@nestjs/common';
import { CreateRovHeroTopDto } from './dto/create-rov-hero-top.dto';
import { UpdateRovHeroTopDto } from './dto/update-rov-hero-top.dto';

@Injectable()
export class RovHeroTopService {
  create(createRovHeroTopDto: CreateRovHeroTopDto) {
    return 'This action adds a new rovHeroTop';
  }

  findAll() {
    return `This action returns all rovHeroTop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovHeroTop`;
  }

  update(id: number, updateRovHeroTopDto: UpdateRovHeroTopDto) {
    return `This action updates a #${id} rovHeroTop`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovHeroTop`;
  }
}
