import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  limit: number = 10;

  @IsOptional()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  page: number = 1;
}
