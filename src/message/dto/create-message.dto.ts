import { IsFQDN, IsNotEmpty, IsString } from "class-validator";


export class CreateMessageDto {
    @IsString({
        message: 'Pole message musi być tekstem',
        context: {
            error: 'message',
            value: 'message',
            constraint: 'isString',
            message: 'Pole message musi być tekstem',
        }
    })
    @IsNotEmpty({
        message: 'Pole message jest wymagane'
    })
    message: string;
}