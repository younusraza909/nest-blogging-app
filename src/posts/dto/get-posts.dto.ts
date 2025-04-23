import { IntersectionType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';
import { PaginationQueryDto } from 'src/common/pagination/dtos/pagination-query.dto';

export class getBasePostDto {
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date) // because we used implicit type in main ts so we dont need this type conversion at all
  endDate: Date;
}

export class getPostDto extends IntersectionType(
  getBasePostDto,
  PaginationQueryDto,
) {}
