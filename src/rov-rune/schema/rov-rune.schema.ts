import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type RovRuneDocument = HydratedDocument<RovRune>;

@Schema()
export class RovRune {
    @Prop({ required: true })
    name_rune: string;

    @Prop({ required: true })
    description_rune: string;

    @Prop({ required: true })
    level: number;

    @Prop({ required: true })
    effect: string;
}

export const RovRuneSchema = SchemaFactory.createForClass(RovRune);