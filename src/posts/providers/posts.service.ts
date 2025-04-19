import { Injectable } from '@nestjs/common';
import { UserService } from '../../users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from '../dto/create-posts-dto';
import { User } from 'src/users/user.entity';
import { TagsService } from 'src/tags/providers/tag.services';

@Injectable()
export class PostsService {
  constructor(
    private readonly userService: UserService,

    private readonly tagsService: TagsService,

    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  public async create(createPostDto: CreatePostDto) {
    const author = (await this.userService.findOneById(
      createPostDto.authorId,
    )) as User;

    const tags = await this.tagsService.findMultipleTags(
      createPostDto.tags ?? [],
    );

    // Create the post
    const post = this.postRepository.create({
      ...createPostDto,
      author: author,
      tags: tags,
    });

    return await this.postRepository.save(post);
  }

  public async findAll() {
    // if we set eager to true while setting true for cascade it will also fetch all retion whil getting post so we dont need below relation code
    const posts = await this.postRepository.find({
      relations: {
        metaOptions: true,
        tags: true,
      },
    });
    return posts;
  }

  public async delete(id: number) {
    // Find the post from the database
    await this.postRepository.delete(id);

    return { deleted: true, id };
  }
}
