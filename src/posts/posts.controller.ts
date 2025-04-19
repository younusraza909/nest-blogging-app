import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { PatchPostDto } from './dto/patch-posts.dto';
import { CreatePostDto } from './dto/create-posts-dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  getPosts() {
    return this.postsService.findAll();
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Patch()
  patchPost(@Body() patchPostDto: PatchPostDto) {
    console.log('patchPostDto', patchPostDto);
  }
}
