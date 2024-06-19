import { Prop, Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document, Types, Schema as MongooseSchema } from "mongoose";
import { RovSkill } from "./rov-skill.schema";

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
    @Prop({ type: [{ type: MongooseSchema.Types.Mixed }] })
    updateHistory: any[]; // Array of objects to store update history
}


export const RovHeroSchema = SchemaFactory.createForClass(RovHero);
    
