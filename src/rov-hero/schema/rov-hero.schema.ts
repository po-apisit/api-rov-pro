import { Prop, Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document, Types, Schema as MongooseSchema } from "mongoose";
import { RovSkill } from "./rov-skill.schema";
import { RovItem } from "src/rov-item/entities/rov-item.entity";

export type RovHeroDocument = Document & RovHero;

@Schema()
export class RovHero
{
    @Prop({ required: true, unique: true })
    name_hero: string;

    @Prop({ required: true })
    name_aliases: string;

    @Prop({ required: true })
    image_hero: string;

    @Prop({ required: true })
    description_hero: string;

    @Prop({ required: true })
    story_hero: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'RovSkill' }], default: [] })
    skills: RovSkill[];

    @Prop({ type: [{ type: Types.ObjectId, ref: 'RovSkill' }], default: [] })
    items: RovItem[];
    
}


export const RovHeroSchema = SchemaFactory.createForClass(RovHero);
    
