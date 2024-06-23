import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { RovItem } from "src/rov-item/entities/rov-item.entity";

export type RovItemCatagorieDocument = HydratedDocument<RovItemCatagorie>;

@Schema()
export class RovItemCatagorie {
    @Prop({unique: true})
    name_item_catagorie: string;

    @Prop()
    image_item_catagorie: string;

    @Prop()
    description_item_catagorie: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'RovItem' }], default: [] })
    items: RovItem[]
}

export const RovItemCatagorieSchema = SchemaFactory.createForClass(RovItemCatagorie);