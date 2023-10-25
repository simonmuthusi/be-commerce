import { Product } from 'src/products/entities/product.entity';
import User from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
} from 'typeorm';

@Entity()
export class ShoppingCart {
  @Column({
    primary: true,
  })
  @Generated('uuid')
  id: string;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => User)
  user: User;

  @Column()
  quantity: number;

  @Column()
  status: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  modified_at: Date;
}
