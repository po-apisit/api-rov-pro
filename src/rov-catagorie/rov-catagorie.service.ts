import { Injectable } from '@nestjs/common';
import { CreateRovCatagorieDto } from './dto/create-rov-catagorie.dto';
import { UpdateRovCatagorieDto } from './dto/update-rov-catagorie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RovCatagorie, RovCatagorieDocument } from './schema/rov-catagorie.schema';
import { Model } from 'mongoose';


@Injectable()
export class RovCatagorieService {

  constructor( @InjectModel(RovCatagorie.name) readonly rovCatagorieMode : Model<RovCatagorieDocument> ){}

  async create(createRovCatagorieDto: CreateRovCatagorieDto) : Promise<RovCatagorie> {
    const catagorie = new this.rovCatagorieMode(createRovCatagorieDto);
    return catagorie.save();
  }

  async findAll() : Promise<RovCatagorie[]> {
    return this.rovCatagorieMode.find().exec();
  }

  async findOne(id: string) : Promise<RovCatagorie> {
    return this.rovCatagorieMode.findById(id).exec() ;
  }

  async update(id: string, updateRovCatagorieDto: UpdateRovCatagorieDto) : Promise<RovCatagorie> {
    return this.rovCatagorieMode.findByIdAndUpdate(id, updateRovCatagorieDto).exec();
  }

  async remove(id: string) : Promise<boolean> {
    const result = await this.rovCatagorieMode.findByIdAndDelete(id);
    return true;
  }
}
