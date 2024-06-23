import { Prop, Schema } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { RovHero } from "src/rov-hero/schema/rov-hero.schema";
import { RovItem } from "src/rov-item/entities/rov-item.entity";

@Schema()
export class RovNewContent {
    @Prop()
    title: string;

    @Prop()
    subtitle: string;

    @Prop()
    image_content: string;

    @Prop({type:Types.ObjectId, ref:"RovHero"})
    hero?: RovHero;

    @Prop({type:Types.ObjectId, ref:"RovItem"})
    item?: RovItem;
}
