import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import CategoryDTO from 'src/categories/dtos/category.dtos';
import { CategoriesService } from 'src/categories/services/categories/categories.service';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}
  @Post()
  async createCategory(@Body() body: CategoryDTO) {
    const category = await this.categoryService.createCategory({
      name: body.name,
    });

    if (!category) {
      throw new BadRequestException('Error in creating category');
    }
    return category;
  }

  @Get()
  listCategories() {
    return this.categoryService.findAll();
  }

  @Get('/:id')
  getCategory(@Param('id') id: string) {
    const category = this.categoryService.findOne(parseInt(id));

    if (!category) {
      throw new BadRequestException('Category not found');
    }
    return category;
  }
}
