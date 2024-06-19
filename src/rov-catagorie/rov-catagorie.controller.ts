import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, NotFoundException } from '@nestjs/common';
import { RovCatagorieService } from './rov-catagorie.service';
import { CreateRovCatagorieDto } from './dto/create-rov-catagorie.dto';
import { UpdateRovCatagorieDto } from './dto/update-rov-catagorie.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { unlink } from 'fs/promises'; // เพิ่มส่วนนี้เพื่อใช้ฟังก์ชันลบไฟล์

@Controller('rov-catagorie')
export class RovCatagorieController {
  constructor(private readonly rovCatagorieService: RovCatagorieService) {}

  @Post()
  create(@Body() createRovCatagorieDto: CreateRovCatagorieDto) {
    return this.rovCatagorieService.create(createRovCatagorieDto);
  }

  @Get()
  findAll() {
    return this.rovCatagorieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rovCatagorieService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRovCatagorieDto: UpdateRovCatagorieDto) {
    return this.rovCatagorieService.update(id, updateRovCatagorieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rovCatagorieService.remove(id);
  }

  @Post('upload/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/rov/catagorie',
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
    const response = await this.rovCatagorieService.findOne(id);
    if(response){
      // ลบไฟล์เก่าถ้ามี
      if (response.image_catagorie) {
        const oldFilePath = `.${response.image_catagorie}`; // เพิ่ม '.' เพื่อให้เป็น path แบบสัมพัทธ์
        try {
          await unlink(oldFilePath); // ลบไฟล์เก่า
        } catch (error) {
          console.error(`Error deleting file: ${oldFilePath}`, error);
        }
      }
      response.image_catagorie = `/public/rov/catagorie/${file.filename}`;
      await this.rovCatagorieService.update(id, response);
      return response;
    }
    throw new NotFoundException("Invalid Id");
  
  }
}
