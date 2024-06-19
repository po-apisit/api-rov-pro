import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type RovSkillDocument = HydratedDocument<RovSkill>;

@Schema()
export class RovSkill {
    @Prop({ required: true })
    name_skill: string;

    @Prop({ required: true })
    image_skill: string;

    @Prop({ required: true })
    description_skill: string;

    @Prop({ required: true })
    index_skill: number;

    @Prop({ type: Types.ObjectId, ref: 'RovHero' })
    heroId: Types.ObjectId;
}

export const RovSkillSchema = SchemaFactory.createForClass(RovSkill);
