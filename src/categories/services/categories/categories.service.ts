import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private repo: Repository<Category>) {}

  createCategory(category) {
    const c_category = this.repo.create(category);

    return this.repo.save(c_category);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    const category = this.repo.findOneBy({ id });

    if (!category) {
      return null;
    }
    return category;
  }
}
