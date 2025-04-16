import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-posts-dto';
import { PatchPostDto } from './dto/patch-posts.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId')
  getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  @ApiOperation({
    summary: 'Creates a new blog post',
  })
  @ApiResponse({
    status: 201,
    description: 'You get 201 response if your post created successfully',
  })
  @Post('')
  createPost(@Body() createPostDto: CreatePostDto) {
    console.log('createPostDto', createPostDto);
    return 'Post created';
  }

  @Patch()
  patchPost(@Body() patchPostDto: PatchPostDto) {
    console.log('patchPostDto', patchPostDto);
  }
}
