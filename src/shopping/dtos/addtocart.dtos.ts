import { IsString } from 'class-validator';

class AddToCartDTO {
  @IsString()
  product: string;

  @IsString()
  quantity: string;
}

export default AddToCartDTO;
