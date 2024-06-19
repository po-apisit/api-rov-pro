import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovMedService } from './rov-med.service';
import { CreateRovMedDto } from './dto/create-rov-med.dto';
import { UpdateRovMedDto } from './dto/update-rov-med.dto';

@Controller('rov-med')
export class RovMedController {
  constructor(private readonly rovMedService: RovMedService) {}

  @Post()
  create(@Body() createRovMedDto: CreateRovMedDto) {
    return this.rovMedService.create(createRovMedDto);
  }

  @Get()
  findAll() {
    return this.rovMedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovMedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovMedDto: UpdateRovMedDto) {
    return this.rovMedService.update(+id, updateRovMedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovMedService.remove(+id);
  }
}
