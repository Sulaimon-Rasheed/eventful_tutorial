import { IsEmail, IsNotEmpty, IsObject, IsString, Matches, Min } from "class-validator";

export class CreateCreatorDto {
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-zA-Z]+$/)
    @Matches(/^\S/)
    creator_name:string

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-zA-Z]+$/)
    @Matches(/^\S/)
    company_name:string

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-zA-Z0-9#.]+$/)
    @Min(8)
    @Matches(/^\S/)
    password:string

    @IsEmail()
    @IsNotEmpty()
    @Matches(/^\S/)
    email:string

    @IsString()
    @IsNotEmpty()
    @Matches(/^\S/)
    country:string

    @IsString()
    @IsNotEmpty()
    @Matches(/^\S/)
    state:string

    @IsString()
    @IsNotEmpty()
    @Matches(/^[0-9+]+$/)
    phoneNum:number

    @IsString()
    @IsNotEmpty()
    account_name:string

    @IsString()
    @IsNotEmpty()
    bank_name:string

    @IsString()
    agreement:string

    profileImage:any
}

