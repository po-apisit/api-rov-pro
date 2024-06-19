import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovRuneService } from './rov-rune.service';
import { CreateRovRuneDto } from './dto/create-rov-rune.dto';
import { UpdateRovRuneDto } from './dto/update-rov-rune.dto';

@Controller('rov-rune')
export class RovRuneController {
  constructor(private readonly rovRuneService: RovRuneService) {}

  @Post()
  create(@Body() createRovRuneDto: CreateRovRuneDto) {
    return this.rovRuneService.create(createRovRuneDto);
  }

  @Get()
  findAll() {
    return this.rovRuneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovRuneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovRuneDto: UpdateRovRuneDto) {
    return this.rovRuneService.update(+id, updateRovRuneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovRuneService.remove(+id);
  }
}
