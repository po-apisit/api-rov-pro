import { Injectable } from '@nestjs/common';
import { CreateRovRuneDto } from './dto/create-rov-rune.dto';
import { UpdateRovRuneDto } from './dto/update-rov-rune.dto';

@Injectable()
export class RovRuneService {
  create(createRovRuneDto: CreateRovRuneDto) {
    return 'This action adds a new rovRune';
  }

  findAll() {
    return `This action returns all rovRune`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovRune`;
  }

  update(id: number, updateRovRuneDto: UpdateRovRuneDto) {
    return `This action updates a #${id} rovRune`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovRune`;
  }
}
