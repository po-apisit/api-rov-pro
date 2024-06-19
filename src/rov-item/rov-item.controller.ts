import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovItemService } from './rov-item.service';
import { CreateRovItemDto } from './dto/create-rov-item.dto';
import { UpdateRovItemDto } from './dto/update-rov-item.dto';

@Controller('rov-item')
export class RovItemController {
  constructor(private readonly rovItemService: RovItemService) {}

  @Post()
  create(@Body() createRovItemDto: CreateRovItemDto) {
    return this.rovItemService.create(createRovItemDto);
  }

  @Get()
  findAll() {
    return this.rovItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovItemDto: UpdateRovItemDto) {
    return this.rovItemService.update(+id, updateRovItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovItemService.remove(+id);
  }
}
