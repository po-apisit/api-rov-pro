import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type RovSeasonDocument = HydratedDocument<RovSeason>;

@Schema()
export class RovSeason{
    @Prop()
    name_season: string;

    @Prop()
    description_season: string;

    @Prop({ type: Types.ObjectId, ref: "RovMed" })
    relationship_med: Types.ObjectId[]
}

export const RovSeasonSchema = SchemaFactory.createForClass(RovSeason);