import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, Generated } from 'typeorm';

@Entity('User')
export class User extends BaseEntity {
  @Column({
    primary: true,
  })
  @Generated('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    unique: true,
  })
  phone_number: string;

  @Column()
  is_admin: boolean;

  @Exclude()
  @Column()
  password: string;
}

export default User;
