import { Injectable } from '@nestjs/common';
import { UserService } from '../../users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly userService: UserService) {}
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
