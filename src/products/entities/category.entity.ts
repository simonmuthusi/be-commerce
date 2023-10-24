import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
} from 'typeorm';

@Entity()
export class Category {
  @Column({
    primary: true,
  })
  @Generated('uuid')
  id: string;

  @Column({
    unique: true,
  })
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  modified_at: Date;

  @OneToMany(() => Product, (products) => products.category)
  products: Product[];

  // @OneToMany(type=>Products, products=>products.category)
  //   products: Products[];
}
