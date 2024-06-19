import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovSeasonService } from './rov-season.service';
import { CreateRovSeasonDto } from './dto/create-rov-season.dto';
import { UpdateRovSeasonDto } from './dto/update-rov-season.dto';

@Controller('rov-season')
export class RovSeasonController {
  constructor(private readonly rovSeasonService: RovSeasonService) {}

  @Post()
  create(@Body() createRovSeasonDto: CreateRovSeasonDto) {
    return this.rovSeasonService.create(createRovSeasonDto);
  }

  @Get()
  findAll() {
    return this.rovSeasonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovSeasonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovSeasonDto: UpdateRovSeasonDto) {
    return this.rovSeasonService.update(+id, updateRovSeasonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovSeasonService.remove(+id);
  }
}
