import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tags.entity';

@Module({
  controllers: [TagsController],
  imports: [TypeOrmModule.forFeature([Tag])],
})
export class TagsModule {}
