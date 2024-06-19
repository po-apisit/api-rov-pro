import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, NotFoundException } from '@nestjs/common';
import { RovHeroService } from './rov-hero.service';
import { CreateRovHeroDto } from './dto/create-rov-hero.dto';
import { UpdateRovHeroDto } from './dto/update-rov-hero.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { unlink } from 'fs/promises'; // เพิ่มส่วนนี้เพื่อใช้ฟังก์ชันลบไฟล์
import { CreateRovSkillDto } from './dto/create-rov-skill.dto';

@Controller('rov-hero')
export class RovHeroController {
  constructor(private readonly rovHeroService: RovHeroService) {}

  @Post()
  create(@Body() createRovHeroDto: CreateRovHeroDto) {
    console.log('====================================');
    console.log(createRovHeroDto);
    console.log('====================================');
    return this.rovHeroService.create(createRovHeroDto);
  }

  @Get()
  findAll() {
    return this.rovHeroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovHeroService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovHeroDto: UpdateRovHeroDto) {
    return this.rovHeroService.update(id, updateRovHeroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovHeroService.remove(id);
  }

  @Post('upload/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/rov/hero',
        filename: (req, file, callback) => {
          const id = req.params.id; // ดึง ID จาก request parameters
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${id}-${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async uploadFile(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
    const response = await this.rovHeroService.findOne(id);
    if(response){
      // ลบไฟล์เก่าถ้ามี
      if (response.image_hero) {
        const oldFilePath = `.${response.image_hero}`; // เพิ่ม '.' เพื่อให้เป็น path แบบสัมพัทธ์
        try {
          await unlink(oldFilePath); // ลบไฟล์เก่า
        } catch (error) {
          console.error(`Error deleting file: ${oldFilePath}`, error);
        }
      }
      response.image_hero = `/public/rov/hero/${file.filename}`;

      // const _newHero:UpdateRovHeroDto = {
      //   ...response
      // }
      //await this.rovHeroService.updateone(id, response);
      return response;
    }
    throw new NotFoundException("Invalid Id");
  }
}
