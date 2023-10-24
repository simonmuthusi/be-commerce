import { IsNumber, IsString } from 'class-validator';

class ProductDTO {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  status: string;

  @IsString()
  category_id: string;
}

export default ProductDTO;
