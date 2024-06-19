import { Injectable } from '@nestjs/common';
import { CreateRovItemDto } from './dto/create-rov-item.dto';
import { UpdateRovItemDto } from './dto/update-rov-item.dto';

@Injectable()
export class RovItemService {
  create(createRovItemDto: CreateRovItemDto) {
    return 'This action adds a new rovItem';
  }

  findAll() {
    return `This action returns all rovItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovItem`;
  }

  update(id: number, updateRovItemDto: UpdateRovItemDto) {
    return `This action updates a #${id} rovItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovItem`;
  }
}
