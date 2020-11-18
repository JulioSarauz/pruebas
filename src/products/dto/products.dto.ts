import { IsNotEmpty } from "class-validator";

export class ProdDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    age: number;
    
    breed?: string;
}