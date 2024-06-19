import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovGloriousService } from './rov-glorious.service';
import { CreateRovGloriousDto } from './dto/create-rov-glorious.dto';
import { UpdateRovGloriousDto } from './dto/update-rov-glorious.dto';

@Controller('rov-glorious')
export class RovGloriousController {
  constructor(private readonly rovGloriousService: RovGloriousService) {}

  @Post()
  create(@Body() createRovGloriousDto: CreateRovGloriousDto) {
    return this.rovGloriousService.create(createRovGloriousDto);
  }

  @Get()
  findAll() {
    return this.rovGloriousService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovGloriousService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovGloriousDto: UpdateRovGloriousDto) {
    return this.rovGloriousService.update(+id, updateRovGloriousDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovGloriousService.remove(+id);
  }
}
