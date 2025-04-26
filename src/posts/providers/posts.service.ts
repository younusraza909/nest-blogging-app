import {
  BadRequestException,
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from '../dto/create-posts-dto';
import { User } from 'src/users/user.entity';
import { TagsService } from 'src/tags/providers/tag.services';
import { PatchPostDto } from '../dto/patch-posts.dto';
import { Tag } from 'src/tags/tags.entity';
import { getPostDto } from '../dto/get-posts.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';

@Injectable()
export class PostsService {
  constructor(
    private readonly userService: UsersService,

    private readonly tagsService: TagsService,

    private readonly paginationProvider: PaginationProvider,

    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  public async create(createPostDto: CreatePostDto, user: ActiveUser) {
    let author: User | null = null;
    let tags: Tag[] | null = null;

    try {
      // Find author from database based on authorId
      author = await this.userService.findOneById(user.sub);
      // Find tags
      tags = await this.tagsService.findMultipleTags(createPostDto.tags ?? []);
    } catch (error) {
      throw new ConflictException(error);
    }

    if ((createPostDto.tags ?? []).length !== tags.length) {
      throw new BadRequestException('Please check your tag Ids');
    }

    // Create post
    const post = this.postRepository.create({
      ...createPostDto,
      ...(author ? { author } : {}),
      tags: tags,
    });

    try {
      // return the post
      return await this.postRepository.save(post);
    } catch (error) {
      throw new ConflictException(error, {
        description: 'Ensure post slug is unique and not a duplicate',
      });
    }
  }

  public async findAll(
    userId: string,
    postQuery: getPostDto,
  ): Promise<Paginated<Post>> {
    const result = this.paginationProvider.paginateQuery(
      postQuery,
      this.postRepository,
      { author: true },
    );
    return result;
  }

  public async delete(id: number) {
    // Find the post from the database
    await this.postRepository.delete(id);

    return { deleted: true, id };
  }

  public async update(patchPostDto: PatchPostDto) {
    let tags: Tag[] | undefined = undefined;
    let post: Post | null | undefined = undefined;

    // Find the Tags
    try {
      tags = await this.tagsService.findMultipleTags(patchPostDto.tags || []);
    } catch {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    /**
     * If tags were not found
     * Need to be equal number of tags
     */
    if (!tags || tags.length !== (patchPostDto.tags ?? []).length) {
      throw new BadRequestException(
        'Please check your tag Ids and ensure they are correct',
      );
    }

    // Find the Post
    try {
      // Returns null if the post does not exist
      post = await this.postRepository.findOneBy({
        id: patchPostDto.id,
      });
    } catch {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    if (!post) {
      throw new BadRequestException('The post Id does not exist');
    }

    // Update the properties
    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;

    // Assign the new tags
    post.tags = tags;

    // Save the post and return
    try {
      await this.postRepository.save(post);
    } catch {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'Error connecting to the database',
        },
      );
    }
    return post;
  }
}
