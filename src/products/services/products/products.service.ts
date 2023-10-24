import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}

  create(item) {
    const c_item = this.repo.create(item);

    return this.repo.save(c_item);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    const item = this.repo.findOneBy({ id });

    if (!item) {
      return null;
    }
    return item;
  }
}
