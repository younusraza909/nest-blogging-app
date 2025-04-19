import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { PatchPostDto } from './dto/patch-posts.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId')
  getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  @Patch()
  patchPost(@Body() patchPostDto: PatchPostDto) {
    console.log('patchPostDto', patchPostDto);
  }
}
