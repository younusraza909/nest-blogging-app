import { Injectable } from '@nestjs/common';
import { UserService } from '../../users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    private readonly userService: UserService,

    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  public findAll(userId: string) {
    const user = this.userService.findById(userId);
    return [
      {
        user: user,
        title: 'Post 1',
        content: 'Content 1',
        userId: userId,
      },
      {
        user: user,
        title: 'Post 2',
        content: 'Content 2',
        userId: userId,
      },
    ];
  }
}
