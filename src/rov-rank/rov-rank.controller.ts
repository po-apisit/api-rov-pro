import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovRankService } from './rov-rank.service';
import { CreateRovRankDto } from './dto/create-rov-rank.dto';
import { UpdateRovRankDto } from './dto/update-rov-rank.dto';

@Controller('rov-rank')
export class RovRankController {
  constructor(private readonly rovRankService: RovRankService) {}

  @Post()
  create(@Body() createRovRankDto: CreateRovRankDto) {
    return this.rovRankService.create(createRovRankDto);
  }

  @Get()
  findAll() {
    return this.rovRankService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovRankService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovRankDto: UpdateRovRankDto) {
    return this.rovRankService.update(+id, updateRovRankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovRankService.remove(+id);
  }
}
