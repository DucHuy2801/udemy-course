import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class RegisterDTO {
    @ApiProperty()
    @IsString()
    fullname: string

    @ApiProperty()
    @IsString()
    email: string

    @ApiProperty()
    @IsString()
    password: string
}