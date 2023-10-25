import { Module } from '@nestjs/common';
import { ShoppingController } from './controllers/shopping/shopping.controller';
import { ShoppingService } from './services/shopping/shopping.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { ShoppingOrder } from './entities/shopping-order.entity';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShoppingCart, ShoppingOrder]),
    ProductsModule,
  ],
  controllers: [ShoppingController],
  providers: [ShoppingService],
})
export class ShoppingModule {
  constructor() {}
}
