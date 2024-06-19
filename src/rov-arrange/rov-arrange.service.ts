import { Injectable } from '@nestjs/common';
import { CreateRovArrangeDto } from './dto/create-rov-arrange.dto';
import { UpdateRovArrangeDto } from './dto/update-rov-arrange.dto';

@Injectable()
export class RovArrangeService {
  create(createRovArrangeDto: CreateRovArrangeDto) {
    return 'This action adds a new rovArrange';
  }

  findAll() {
    return `This action returns all rovArrange`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovArrange`;
  }

  update(id: number, updateRovArrangeDto: UpdateRovArrangeDto) {
    return `This action updates a #${id} rovArrange`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovArrange`;
  }
}
