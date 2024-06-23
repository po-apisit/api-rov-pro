import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovItemCatagorieService } from './rov-item-catagorie.service';
import { CreateRovItemCatagorieDto } from './dto/create-rov-item-catagorie.dto';
import { UpdateRovItemCatagorieDto } from './dto/update-rov-item-catagorie.dto';

@Controller('rov-item-catagorie')
export class RovItemCatagorieController {
  constructor(private readonly rovItemCatagorieService: RovItemCatagorieService) {}

  @Post()
  create(@Body() createRovItemCatagorieDto: CreateRovItemCatagorieDto) {
    return this.rovItemCatagorieService.create(createRovItemCatagorieDto);
  }

  @Get()
  findAll() {
    return this.rovItemCatagorieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovItemCatagorieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovItemCatagorieDto: UpdateRovItemCatagorieDto) {
    return this.rovItemCatagorieService.update(+id, updateRovItemCatagorieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovItemCatagorieService.remove(+id);
  }
}
