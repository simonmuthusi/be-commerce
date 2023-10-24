import { IsEmail, IsString, IsPhoneNumber, IsBoolean } from 'class-validator';

class CreateUserDTO {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber('KE')
  phone_number: string;

  @IsBoolean()
  is_admin: boolean;
}

export default CreateUserDTO;
