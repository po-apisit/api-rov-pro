import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RovCatagorieDocument = HydratedDocument<RovCatagorie>;

@Schema()
export class RovCatagorie{
    @Prop()
    name_catagorie: string;

    @Prop()
    image_catagorie: string;

    @Prop()
    description_catagorie: string;
}

export const RovCatagorieSchema = SchemaFactory.createForClass(RovCatagorie);