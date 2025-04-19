import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class MetaOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'json',
  })
  metaValue: string;

  @CreateDateColumn()
  createdDate: Date;

  @CreateDateColumn()
  updateDate: Date;
}
