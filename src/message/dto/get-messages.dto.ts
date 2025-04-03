import { IsNumber, IsString, IsOptional, Min, Max, IsIn } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetMessagesDto {
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(1, { message: 'Pole page musi być większe od 0' })
  page?: number = 1;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(1, { message: 'Pole limit musi być większe od 0' })
  @Max(100, { message: 'Pole limit musi być mniejsze od 100' })
  limit?: number = 10;

  @IsOptional()
  @IsString({
    message: 'Pole sort musi być tekstem'
  })
  @IsIn(['asc', 'desc'], {
    message: 'Pole sort musi być albo asc albo desc'
  })
  sort?: 'asc' | 'desc' = 'desc';
}
