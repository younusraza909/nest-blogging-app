import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetUsersParamDto {
  @ApiPropertyOptional({
    description: 'Get user with specified id',
    example: 1,
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
