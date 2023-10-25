import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

import User from '../entities/user.entity';
import { LoginUserDTO } from '../dtos/loginuser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async createUser(user) {
    const hashedPassword = bcrypt.hashSync(user.password, 10);

    user.password = hashedPassword;

    const c_user = this.userRepo.create(user);

    return this.userRepo.save(c_user);
  }

  listUsers() {
    return this.userRepo.find();
  }

  getUser(id: string) {
    if (!id) {
      return null;
    }
    return this.userRepo.findOneBy({ id });
  }

  async loginUser(loginUser: LoginUserDTO) {
    const user = await this.userRepo.findOne({
      where: { email: loginUser.email },
    });

    if (!user) {
      return null;
    }

    const passwordMatch = await bcrypt.compare(
      loginUser.password,
      user.password,
    );
    if (!passwordMatch) {
      return null;
    }

    return user;
  }
}
