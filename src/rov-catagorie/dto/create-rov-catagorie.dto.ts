import { IsNotEmpty, IsString } from "class-validator";

export class CreateRovCatagorieDto {
    @IsString()
    @IsNotEmpty()
    name_catagorie: string;

    @IsString()
    @IsNotEmpty()
    image_catagorie: string;

    @IsString()
    @IsNotEmpty()
    description_catagorie: string;
}
