import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { ShoppingOrder } from 'src/shopping/entities/shopping-order.entity';
import { ShoppingCart } from 'src/shopping/entities/shopping-cart.entity';
import User from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { ProductsService } from 'src/products/services/products/products.service';

@Injectable()
export class ShoppingService {
  @Inject(ProductsService)
  private readonly productService: ProductsService;

  constructor(
    @InjectRepository(ShoppingOrder)
    private repoOrder: Repository<ShoppingOrder>,
    @InjectRepository(ShoppingCart) private repoCart: Repository<ShoppingCart>,
  ) {}

  async addToCart(product: Product, user: User, quantity: number) {
    const cart = await this.repoCart
      .createQueryBuilder('shopping_cart')
      .where(
        'shopping_cart.productId = :productId and shopping_cart.userId = :userId',
        { productId: product.id, userId: user.id },
      )
      .getOne();

    const cartItems = {
      product: product,
      user: user,
      quantity: quantity,
      status: 1,
    };

    if (cart) {
      cartItems['id'] = cart.id;
    }

    const c = await this.repoCart.create(cartItems);
    return this.repoCart.save(c);
  }

  async removeFromCart(item) {
    const cart = await this.repoCart.findOneBy(item);
    if (!cart) {
      return null;
    }

    return this.repoCart.remove(item);
  }

  getProduct(id: string) {
    return this.productService.findOneProd(id);
  }
}
