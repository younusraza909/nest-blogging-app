import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostType } from './enums/postType.enum';
import { PostStatus } from './enums/postStatus.enum';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tags.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    nullable: false,
    default: PostType.POST,
  })
  postType: PostType;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: PostStatus,
    nullable: false,
    default: PostStatus.DRAFT,
  })
  status: PostStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp', // 'datetime' in mysql
    nullable: true,
  })
  publishOn?: Date;

  // Work on these in lecture on relationships
  @ManyToMany(() => Tag, (tag) => tag.posts)
  @JoinTable()
  tags?: Tag[];

  @ManyToOne(() => User, (user) => user.posts)
  author: User;

  @OneToOne(() => MetaOption, (metaOptions) => metaOptions.post, {
    cascade: true,
  })
  metaOptions?: MetaOption | null;
}
