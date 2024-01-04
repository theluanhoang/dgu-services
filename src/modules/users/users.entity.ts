import { BaseEntity } from '@modules/shared/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true, select: false })
  password: string;
}
