import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateRovSkillDto {

    @IsOptional()
    @IsMongoId()
    _id:string;
    
    @IsString()
    @IsNotEmpty()
    name_skill: string;

    @IsString()
    @IsNotEmpty()
    image_skill: string;

    @IsString()
    @IsNotEmpty()
    description_skill: string;

    @IsNumber()
    @IsNotEmpty()
    index_skill: number;
}
