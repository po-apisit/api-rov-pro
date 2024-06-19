import { Injectable } from '@nestjs/common';
import { CreateRovSeasonDto } from './dto/create-rov-season.dto';
import { UpdateRovSeasonDto } from './dto/update-rov-season.dto';

@Injectable()
export class RovSeasonService {
  create(createRovSeasonDto: CreateRovSeasonDto) {
    return 'This action adds a new rovSeason';
  }

  findAll() {
    return `This action returns all rovSeason`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovSeason`;
  }

  update(id: number, updateRovSeasonDto: UpdateRovSeasonDto) {
    return `This action updates a #${id} rovSeason`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovSeason`;
  }
}
