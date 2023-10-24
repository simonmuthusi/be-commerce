import {
  IsEmail,
  IsString,
  IsPhoneNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

class ListUserDTO {
  @IsOptional()
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  last_name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsPhoneNumber('KE')
  phone_number: string;

  @IsOptional()
  @IsBoolean()
  is_admin: boolean;
}

export default ListUserDTO;
