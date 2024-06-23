import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { RovItemCatagorie } from "src/rov-item-catagorie/entities/rov-item-catagorie.entity";

export type RovItemDocument = HydratedDocument<RovItem>;

@Schema()
export class RovItem{
    @Prop({ required: true })
    name_item: string;

    @Prop({ required: true })
    image_item: string;

    @Prop({ required: true })
    description_item: string;

    @Prop({ type: { type: Types.ObjectId, ref: 'RovItemCatagorie' } })
    ItemCatagorieId: RovItemCatagorie;
}

export const RovItemSchema = SchemaFactory.createForClass(RovItem);
