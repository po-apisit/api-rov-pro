import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RovItemDocument = HydratedDocument<RovItem>;

@Schema()
export class RovItem{
    @Prop({ required: true })
    name_item: string;

    @Prop({ required: true })
    image_item: string;

    @Prop({ required: true })
    description_item: string;
}

export const RovItemSchema = SchemaFactory.createForClass(RovItem);
