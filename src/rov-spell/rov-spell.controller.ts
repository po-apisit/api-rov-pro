import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovSpellService } from './rov-spell.service';
import { CreateRovSpellDto } from './dto/create-rov-spell.dto';
import { UpdateRovSpellDto } from './dto/update-rov-spell.dto';

@Controller('rov-spell')
export class RovSpellController {
  constructor(private readonly rovSpellService: RovSpellService) {}

  @Post()
  create(@Body() createRovSpellDto: CreateRovSpellDto) {
    return this.rovSpellService.create(createRovSpellDto);
  }

  @Get()
  findAll() {
    return this.rovSpellService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovSpellService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovSpellDto: UpdateRovSpellDto) {
    return this.rovSpellService.update(+id, updateRovSpellDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovSpellService.remove(+id);
  }
}
