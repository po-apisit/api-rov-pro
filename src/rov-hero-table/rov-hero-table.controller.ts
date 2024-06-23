import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovHeroTableService } from './rov-hero-table.service';
import { CreateRovHeroTableDto } from './dto/create-rov-hero-table.dto';
import { UpdateRovHeroTableDto } from './dto/update-rov-hero-table.dto';

@Controller('rov-hero-table')
export class RovHeroTableController {
  constructor(private readonly rovHeroTableService: RovHeroTableService) {}

  @Post()
  create(@Body() createRovHeroTableDto: CreateRovHeroTableDto) {
    return this.rovHeroTableService.create(createRovHeroTableDto);
  }

  @Get()
  findAll() {
    return this.rovHeroTableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovHeroTableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovHeroTableDto: UpdateRovHeroTableDto) {
    return this.rovHeroTableService.update(+id, updateRovHeroTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovHeroTableService.remove(+id);
  }
}
