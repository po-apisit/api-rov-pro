import { Injectable } from '@nestjs/common';
import { CreateRovNewContentDto } from './dto/create-rov-new-content.dto';
import { UpdateRovNewContentDto } from './dto/update-rov-new-content.dto';

@Injectable()
export class RovNewContentService {
  create(createRovNewContentDto: CreateRovNewContentDto) {
    return 'This action adds a new rovNewContent';
  }

  findAll() {
    return `This action returns all rovNewContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovNewContent`;
  }

  update(id: number, updateRovNewContentDto: UpdateRovNewContentDto) {
    return `This action updates a #${id} rovNewContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovNewContent`;
  }
}
