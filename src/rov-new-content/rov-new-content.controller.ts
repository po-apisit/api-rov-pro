import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovNewContentService } from './rov-new-content.service';
import { CreateRovNewContentDto } from './dto/create-rov-new-content.dto';
import { UpdateRovNewContentDto } from './dto/update-rov-new-content.dto';

@Controller('rov-new-content')
export class RovNewContentController {
  constructor(private readonly rovNewContentService: RovNewContentService) {}

  @Post()
  create(@Body() createRovNewContentDto: CreateRovNewContentDto) {
    return this.rovNewContentService.create(createRovNewContentDto);
  }

  @Get()
  findAll() {
    return this.rovNewContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovNewContentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovNewContentDto: UpdateRovNewContentDto) {
    return this.rovNewContentService.update(+id, updateRovNewContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovNewContentService.remove(+id);
  }
}
