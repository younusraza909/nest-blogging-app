import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostDto } from './create-posts-dto';
// if we import partial type from nestjs/mapped it would work but we need to re write whole swagger thing again from post to patch
// so we import partial type from nestjs/swagger

export class PatchPostDto extends PartialType(CreatePostDto) {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  id: number;
}
