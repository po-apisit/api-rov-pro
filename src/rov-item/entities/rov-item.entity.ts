import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { RovItemCatagorie } from "src/rov-item-catagorie/entities/rov-item-catagorie.entity";

export type RovItemDocument = HydratedDocument<RovItem>;

@Schema()
export class RovItem {
    @Prop()
    name_item: string;

    @Prop()
    image_item: string;

    @Prop()
    description_item: string;

    @Prop({ type: Types.ObjectId, ref: "RovItemCatagorie" })
    catagorie: RovItemCatagorie;
}


export const RovItemSchema = SchemaFactory.createForClass(RovItem);