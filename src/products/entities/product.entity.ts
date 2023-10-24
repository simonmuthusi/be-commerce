import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  price: number;
  @Column()
  name: string;
  @Column()
  status: string;
  @Column()
  category_id: number;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  modified_at: Date;
}
