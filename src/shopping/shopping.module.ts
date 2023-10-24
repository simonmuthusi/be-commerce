import { Module } from '@nestjs/common';
import { ShoppingController } from './controllers/shopping/shopping.controller';
import { ShoppingService } from './services/shopping/shopping.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { Order } from './entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingCart, Order])],
  controllers: [ShoppingController],
  providers: [ShoppingService],
})
export class ShoppingModule {}
