import { IsString } from 'class-validator';

class CategoryDTO {
  @IsString()
  name: string;
}

export default CategoryDTO;
