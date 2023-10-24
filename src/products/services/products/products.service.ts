import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/products/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private repoProd: Repository<Product>,
    @InjectRepository(Category) private repoCat: Repository<Category>,
  ) {}

  async createProd(item) {
    const c_category = await this.repoCat.findOneBy({ id: item.category });

    if (!c_category) {
      return null;
    }

    const c_item = this.repoProd.create({
      name: item.name,
      price: item.price,
      status: item.status,
      url: item.url,
      description: item.description,
      category: c_category,
    });

    return this.repoProd.save(c_item);
  }

  findAllProd() {
    return this.repoProd.find();
  }

  findOneProd(id: string) {
    const item = this.repoProd.findOneBy({ id });

    if (!item) {
      return null;
    }
    return item;
  }

  createCat(category) {
    const c_category = this.repoCat.create(category);

    return this.repoCat.save(c_category);
  }

  findAllCat() {
    return this.repoCat.find();
  }

  findOneCat(id: string) {
    const category = this.repoCat.findOneBy({ id });

    if (!category) {
      return null;
    }
    return category;
  }
}
