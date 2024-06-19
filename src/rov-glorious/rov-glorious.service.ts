import { Injectable } from '@nestjs/common';
import { CreateRovGloriousDto } from './dto/create-rov-glorious.dto';
import { UpdateRovGloriousDto } from './dto/update-rov-glorious.dto';

@Injectable()
export class RovGloriousService {
  create(createRovGloriousDto: CreateRovGloriousDto) {
    return 'This action adds a new rovGlorious';
  }

  findAll() {
    return `This action returns all rovGlorious`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovGlorious`;
  }

  update(id: number, updateRovGloriousDto: UpdateRovGloriousDto) {
    return `This action updates a #${id} rovGlorious`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovGlorious`;
  }
}
