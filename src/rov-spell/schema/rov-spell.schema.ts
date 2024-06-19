import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type RovSpellDocument = HydratedDocument<RovSpell>;

@Schema()
export class RovSpell {
    @Prop()
    name_spell: string;

    @Prop()
    description_spell: string;

}

export const RovSpellSchema = SchemaFactory.createForClass(RovSpell);