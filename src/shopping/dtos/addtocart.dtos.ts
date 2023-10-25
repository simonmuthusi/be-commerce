import { IsString } from 'class-validator';

class AddToCartDTO {
  @IsString()
  category: string;

  @IsString()
  product: string;

  @IsString()
  quantity: number;
}

export default AddToCartDTO;
