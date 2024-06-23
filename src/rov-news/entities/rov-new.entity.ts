import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { RovNewCatagorie } from "src/rov-new-catagorie/entities/rov-new-catagorie.entity";
import { RovNewContent } from "src/rov-new-content/entities/rov-new-content.entity";

export type RovNewDocument = HydratedDocument<RovNew>;

@Schema()
export class RovNew {

    @Prop()
    header_new: string;

    @Prop({type: [ {type:Types.ObjectId, ref:"RovNewContent" }], default:[]})
    contents: RovNewContent[];

    @Prop({ type: Types.ObjectId, ref:"RovNewCatagorie" })
    catagorie: RovNewCatagorie    
}

export const RovNewSchema = SchemaFactory.createForClass(RovNew);
