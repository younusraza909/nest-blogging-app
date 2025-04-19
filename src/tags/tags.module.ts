import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tags.entity';
import { TagsService } from './providers/tag.services';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
  exports: [TagsService],
  imports: [TypeOrmModule.forFeature([Tag])],
})
export class TagsModule {}
