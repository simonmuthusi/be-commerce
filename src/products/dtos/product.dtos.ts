import { IsNumber, IsString } from 'class-validator';

class ProductDTO {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  status: string;

  @IsString()
  url: string;

  @IsString()
  description: string;

  @IsString()
  category: string;
}

export default ProductDTO;
