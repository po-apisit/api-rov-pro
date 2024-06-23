import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovNewsService } from './rov-news.service';
import { CreateRovNewDto } from './dto/create-rov-new.dto';
import { UpdateRovNewDto } from './dto/update-rov-new.dto';

@Controller('rov-news')
export class RovNewsController {
  constructor(private readonly rovNewsService: RovNewsService) {}

  @Post()
  create(@Body() createRovNewDto: CreateRovNewDto) {
    return this.rovNewsService.create(createRovNewDto);
  }

  @Get()
  findAll() {
    return this.rovNewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovNewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovNewDto: UpdateRovNewDto) {
    return this.rovNewsService.update(+id, updateRovNewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovNewsService.remove(+id);
  }
}
