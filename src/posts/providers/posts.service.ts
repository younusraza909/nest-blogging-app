import { Injectable } from '@nestjs/common';
import { UserService } from '../../users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from '../dto/create-posts-dto';
import { MetaOption } from 'src/meta-options/meta-option.entity';

@Injectable()
export class PostsService {
  constructor(
    private readonly userService: UserService,

    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    @InjectRepository(MetaOption)
    private readonly metaOptionRepositry: Repository<MetaOption>,
  ) {}

  public async create(createPostDto: CreatePostDto) {
    const metaOptions = createPostDto.metaOptions
      ? this.metaOptionRepositry.create(createPostDto.metaOptions)
      : null;

    if (metaOptions) await this.metaOptionRepositry.save(metaOptions);

    const post = this.postRepository.create(createPostDto);

    post.metaOptions = metaOptions;

    return await this.postRepository.save(post);
  }

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
