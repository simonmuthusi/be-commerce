import {
  Controller,
  Get,
  Post,
  Injectable,
  Body,
  Query,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import CreateUserDTO from '../dtos/create-user.dto';
import ListUserDTO from '../dtos/list-user.dto';

@Injectable()
@Controller('api/v1/auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/users')
  async createUser(@Body() body: CreateUserDTO) {
    const user = await this.userService.createUser({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      phone_number: body.phone_number,
      is_admin: body.is_admin,
    });

    if (!user) {
      throw new NotFoundException('Error in creating user');
    }
    return user;
  }

  @Get('/users')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async listUsers(@Query() query: ListUserDTO) {
    return await this.userService.listUsers();
  }

  @Get('/users/:id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.getUser(parseInt(id));

    if (!user) {
      throw new NotFoundException('Invalid details');
    }

    return user;
  }
}