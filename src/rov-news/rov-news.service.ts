import { Injectable } from '@nestjs/common';
import { CreateRovNewDto } from './dto/create-rov-new.dto';
import { UpdateRovNewDto } from './dto/update-rov-new.dto';

@Injectable()
export class RovNewsService {
  create(createRovNewDto: CreateRovNewDto) {
    return 'This action adds a new rovNew';
  }

  findAll() {
    return `This action returns all rovNews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovNew`;
  }

  update(id: number, updateRovNewDto: UpdateRovNewDto) {
    return `This action updates a #${id} rovNew`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovNew`;
  }
}
