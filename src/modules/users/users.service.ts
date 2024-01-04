import { CreateUserDto } from '@modules/users/dto/create-user.dto';
import { User } from '@modules/users/users.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  async handleCreateUser(dto: CreateUserDto): Promise<User> {
    const newUser = await this.usersRepository.save(dto);

    return newUser;
  }
}
