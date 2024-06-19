import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RovMedDocument = HydratedDocument<RovMed>;

@Schema()
export class RovMed{
    @Prop()
    name_med: string;

    @Prop()
    image_med: string;

    @Prop()
    decription_med: string;

}

export const RovMedSchema = SchemaFactory.createForClass(RovMed);