import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovArrangeService } from './rov-arrange.service';
import { CreateRovArrangeDto } from './dto/create-rov-arrange.dto';
import { UpdateRovArrangeDto } from './dto/update-rov-arrange.dto';

@Controller('rov-arrange')
export class RovArrangeController {
  constructor(private readonly rovArrangeService: RovArrangeService) {}

  @Post()
  create(@Body() createRovArrangeDto: CreateRovArrangeDto) {
    return this.rovArrangeService.create(createRovArrangeDto);
  }

  @Get()
  findAll() {
    return this.rovArrangeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovArrangeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovArrangeDto: UpdateRovArrangeDto) {
    return this.rovArrangeService.update(+id, updateRovArrangeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovArrangeService.remove(+id);
  }
}
