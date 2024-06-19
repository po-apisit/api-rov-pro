import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRovHeroDto } from './dto/create-rov-hero.dto';
import { UpdateRovHeroDto } from './dto/update-rov-hero.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RovHero, RovHeroDocument } from './schema/rov-hero.schema';
import { Model } from 'mongoose';
import { RovSkill, RovSkillDocument } from './schema/rov-skill.schema';
import { CreateRovSkillDto } from './dto/create-rov-skill.dto';

@Injectable()
export class RovHeroService {

  constructor(
    @InjectModel(RovHero.name) readonly rovHeroModel: Model<RovHeroDocument>,
    @InjectModel(RovSkill.name) readonly rovSkillModel: Model<RovSkillDocument>,
  ) {}

  async create(createRovHeroDto: CreateRovHeroDto): Promise<RovHero> {
    const createHero = new this.rovHeroModel({ ...createRovHeroDto });

    const saveHero = await createHero.save();

    const skills = await Promise.all(
      createRovHeroDto.skills.map(async (skillDto: CreateRovSkillDto) => {
        const createSkill = new this.rovSkillModel({ ...skillDto, heroId: saveHero._id });
        return await createSkill.save();
      }),
    );

    saveHero.skills = skills.map(skill => skill.toObject()); // Convert Mongoose documents to plain objects
    await saveHero.save();

    return saveHero;
  }

  async findAll(): Promise<RovHero[]> {
    return this.rovHeroModel.find().populate('skills').exec();
  }

  async findOne(id: string): Promise<RovHero> {
    const hero = await this.rovHeroModel.findById(id).populate('skills').exec();
    if (!hero) {
      throw new NotFoundException(`Hero with ID ${id} not found`);
    }
    return hero;
  }

  async updateOne(id: string, updateRovHeroDto: UpdateRovHeroDto): Promise<RovHero> {
    return await this.rovHeroModel.findByIdAndUpdate(id, updateRovHeroDto).exec();
  }

  async update(id: string, updateRovHeroDto: UpdateRovHeroDto): Promise<RovHero> {
    const existingHero = await this.rovHeroModel.findById(id).exec();
    if (!existingHero) {
      throw new NotFoundException(`Hero with ID ${id} not found`);
    }

    Object.assign(existingHero, updateRovHeroDto);
    await existingHero.save();

    await Promise.all(updateRovHeroDto.skills.map(async skillDto => {
      if (skillDto._id) {
        await this.rovSkillModel.findByIdAndUpdate(skillDto._id, skillDto).exec();
      } else {
        const newSkill = new this.rovSkillModel({ ...skillDto, heroId: id });
        await newSkill.save();
        existingHero.skills.push(newSkill);
      }
    }));

    await existingHero.save();

    return this.findOne(id); // Return the updated hero with populated skills
  }

  async remove(id: string): Promise<RovHero> {
    const hero = await this.rovHeroModel.findByIdAndDelete(id).exec();
    if (!hero) {
      throw new NotFoundException(`Hero with ID ${id} not found`);
    }
    await this.rovSkillModel.deleteMany({ heroId: id }).exec();
    return hero;
  }
}
