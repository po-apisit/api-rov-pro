import { Injectable } from '@nestjs/common';
import { CreateRovSpellDto } from './dto/create-rov-spell.dto';
import { UpdateRovSpellDto } from './dto/update-rov-spell.dto';

@Injectable()
export class RovSpellService {
  create(createRovSpellDto: CreateRovSpellDto) {
    return 'This action adds a new rovSpell';
  }

  findAll() {
    return `This action returns all rovSpell`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovSpell`;
  }

  update(id: number, updateRovSpellDto: UpdateRovSpellDto) {
    return `This action updates a #${id} rovSpell`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovSpell`;
  }
}
