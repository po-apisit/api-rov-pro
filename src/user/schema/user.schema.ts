import { Prop, Schema } from "@nestjs/mongoose";




@Schema()
export class User {

    @Prop({ required: true })
    name_user: string;

    @Prop()
    phone: string;

    @Prop()
    open_id?: string;

    @Prop()
    birthday?: string;

    

}
