import { Injectable } from '@nestjs/common';
import { CreateRovRankDto } from './dto/create-rov-rank.dto';
import { UpdateRovRankDto } from './dto/update-rov-rank.dto';

@Injectable()
export class RovRankService {
  create(createRovRankDto: CreateRovRankDto) {
    return 'This action adds a new rovRank';
  }

  findAll() {
    return `This action returns all rovRank`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovRank`;
  }

  update(id: number, updateRovRankDto: UpdateRovRankDto) {
    return `This action updates a #${id} rovRank`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovRank`;
  }
}
