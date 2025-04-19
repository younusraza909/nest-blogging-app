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
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public async create(createPostDto: CreatePostDto) {
    // due to cascade set to true we typeorm directly detects and save entry in meta options and save relevant id here in post
    const post = this.postRepository.create(createPostDto);

    return await this.postRepository.save(post);
  }

  public async findAll() {
    // if we set eager to true while setting true for cascade it will also fetch all retion whil getting post so we dont need below relation code
    const posts = await this.postRepository.find({
      relations: {
        metaOptions: true,
      },
    });
    return posts;
  }

  public async delete(id: number) {
    // Find the post from the database
    const post = await this.postRepository.findOneBy({ id });

    // Delete metaOptions and the post
    await this.postRepository.delete(id);
    if (post?.metaOptions?.id)
      await this.metaOptionsRepository.delete(post?.metaOptions.id);

    return { deleted: true, id: post?.id };
  }
}
