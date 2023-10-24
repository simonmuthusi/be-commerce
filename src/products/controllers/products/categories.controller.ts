import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import CategoryDTO from 'src/products/dtos/category.dtos';
import { ProductsService } from 'src/products/services/products/products.service';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private categoryService: ProductsService) {}
  @Post()
  async createCategory(@Body() body: CategoryDTO) {
    const category = await this.categoryService.createCat({
      name: body.name,
    });

    if (!category) {
      throw new BadRequestException('Error in creating category');
    }
    return category;
  }

  @Get()
  listCategories() {
    return this.categoryService.findAllCat();
  }

  @Get('/:id')
  getCategory(@Param('id') id: string) {
    const category = this.categoryService.findOneCat(id);

    if (!category) {
      throw new BadRequestException('Category not found');
    }
    return category;
  }
}
