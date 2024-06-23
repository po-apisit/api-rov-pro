import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RovNewCatagorieService } from './rov-new-catagorie.service';
import { CreateRovNewCatagorieDto } from './dto/create-rov-new-catagorie.dto';
import { UpdateRovNewCatagorieDto } from './dto/update-rov-new-catagorie.dto';

@Controller('rov-new-catagorie')
export class RovNewCatagorieController {
  constructor(private readonly rovNewCatagorieService: RovNewCatagorieService) {}

  @Post()
  create(@Body() createRovNewCatagorieDto: CreateRovNewCatagorieDto) {
    return this.rovNewCatagorieService.create(createRovNewCatagorieDto);
  }

  @Get()
  findAll() {
    return this.rovNewCatagorieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovNewCatagorieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovNewCatagorieDto: UpdateRovNewCatagorieDto) {
    return this.rovNewCatagorieService.update(+id, updateRovNewCatagorieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovNewCatagorieService.remove(+id);
  }
}
