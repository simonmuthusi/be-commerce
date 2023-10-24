import { Category } from 'src/categories/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  OneToMany,
} from 'typeorm';

const DEFAULT_IMAGE_URL =
  'https://img.freepik.com/free-vector/default-collapse-stock-market-exchange_107791-85.jpg';

@Entity()
export class Product {
  @Column({
    primary: true,
  })
  @Generated('uuid')
  id: string;

  @Column()
  price: number;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column({
    default: DEFAULT_IMAGE_URL,
    nullable: true,
  })
  url: string;

  @Column({
    nullable: true,
  })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  modified_at: Date;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
