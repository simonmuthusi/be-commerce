import { Product } from 'src/products/entities/product.entity';
import User from 'src/users/entities/user.entity';
import { Column, Entity, Generated, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Order {
  @Column({
    primary: true,
  })
  @Generated('uuid')
  id: string;

  @OneToOne(() => Product)
  @JoinColumn()
  product: Product;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  quantity: number;

  @Column()
  status: number;
}
