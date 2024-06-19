import { Injectable } from '@nestjs/common';
import { CreateRovMedDto } from './dto/create-rov-med.dto';
import { UpdateRovMedDto } from './dto/update-rov-med.dto';

@Injectable()
export class RovMedService {
  create(createRovMedDto: CreateRovMedDto) {
    return 'This action adds a new rovMed';
  }

  findAll() {
    return `This action returns all rovMed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rovMed`;
  }

  update(id: number, updateRovMedDto: UpdateRovMedDto) {
    return `This action updates a #${id} rovMed`;
  }

  remove(id: number) {
    return `This action removes a #${id} rovMed`;
  }
}
