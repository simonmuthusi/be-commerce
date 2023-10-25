import {
  Body,
  Controller,
  Delete,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import AddToCartDTO from 'src/shopping/dtos/addtocart.dtos';
import { ShoppingService } from 'src/shopping/services/shopping/shopping.service';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import User from 'src/users/entities/user.entity';

@Controller('api/v1/shopping')
export class ShoppingController {
  constructor(private shoppingService: ShoppingService) {}

  @Post('/cart')
  async addToCart(@Body() body: AddToCartDTO, @CurrentUser() user: User) {
    const product = await this.shoppingService.getProduct(body.product);
    if (!product) {
      throw new NotFoundException('Error in saving product');
    }
    const cart = this.shoppingService.addToCart(
      product,
      user,
      parseInt(body.quantity),
    );
    return cart;
  }

  @Delete(':id')
  removeFromCart(@Param('id') id: string) {
    return [id];
  }
}
