import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-posts-dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId')
  getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  @Post('')
  createPost(@Body() createPostDto: CreatePostDto) {
    console.log('createPostDto', createPostDto);
    return 'Post created';
  }
}
