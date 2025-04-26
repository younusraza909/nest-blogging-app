import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { PatchPostDto } from './dto/patch-posts.dto';
import { CreatePostDto } from './dto/create-posts-dto';
import { getPostDto } from './dto/get-posts.dto';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/{:userId}')
  getPosts(@Param('userId') userId: string, @Query() postQuery: getPostDto) {
    return this.postsService.findAll(userId, postQuery);
  }

  @Post()
  createPost(
    @Body() createPostDto: CreatePostDto,
    @ActiveUser() user: ActiveUser,
  ) {
    return this.postsService.create(createPostDto, user);
  }

  @Patch()
  patchPost(@Body() patchPostDto: PatchPostDto) {
    return this.postsService.update(patchPostDto);
  }

  @Delete()
  public deletePost(@Query('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
