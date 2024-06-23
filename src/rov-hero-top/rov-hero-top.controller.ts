import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovHeroTopService } from './rov-hero-top.service';
import { CreateRovHeroTopDto } from './dto/create-rov-hero-top.dto';
import { UpdateRovHeroTopDto } from './dto/update-rov-hero-top.dto';

@Controller('rov-hero-top')
export class RovHeroTopController {
  constructor(private readonly rovHeroTopService: RovHeroTopService) {}

  @Post()
  create(@Body() createRovHeroTopDto: CreateRovHeroTopDto) {
    return this.rovHeroTopService.create(createRovHeroTopDto);
  }

  @Get()
  findAll() {
    return this.rovHeroTopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovHeroTopService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovHeroTopDto: UpdateRovHeroTopDto) {
    return this.rovHeroTopService.update(+id, updateRovHeroTopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovHeroTopService.remove(+id);
  }
}
