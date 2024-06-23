import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";
import { CreateRovSkillDto } from "./create-rov-skill.dto";

export class CreateRovHeroDto {
    
    @IsMongoId()
    @IsOptional()
    _id?:string;

    @IsString()
    @IsNotEmpty()
    readonly name_hero: string;
    @IsString()
    @IsNotEmpty()
    readonly name_aliases: string;
    @IsString()
    @IsNotEmpty()
    readonly image_hero: string;
    @IsString()
    @IsNotEmpty()
    readonly description_hero: string;
    @IsString()
    @IsNotEmpty()
    readonly story_hero: string;

    @IsOptional()
    skills?:CreateRovSkillDto[]
}
