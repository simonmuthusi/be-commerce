import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import ProductDTO from 'src/products/dtos/product.dtos';
import { ProductsService } from 'src/products/services/products/products.service';

@Controller('api/v1/products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Post()
  async createCategory(@Body() body: ProductDTO) {
    const product = await this.productService.create({
      name: body.name,
      price: body.price,
      status: body.status,
      category_id: body.category_id,
    });
    
    if (!product) {
      throw new BadRequestException('Error in creating product');
    }
    return product;
  }

  @Get()
  listCategories() {
    return this.productService.findAll();
  }

  @Get('/:id')
  getCategory(@Param('id') id: string) {
    const category = this.productService.findOne(parseInt(id));

    if (!category) {
      throw new BadRequestException('Product not found');
    }
    return category;
  }
}

