import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import AddToCartDTO from 'src/shopping/dtos/addtocart.dtos';

@Controller('api/v1/shopping/cart')
export class ShoppingController {
  @Post()
  addToCart(@Body() body: AddToCartDTO) {
    return [body];
  }

  @Delete(':id')
  removeFromCart(@Param('id') id: string) {
    return [id];
  }
}
