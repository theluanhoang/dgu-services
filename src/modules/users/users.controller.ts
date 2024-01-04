import { CreateUserDto } from '@modules/users/dto/create-user.dto';
import { User } from '@modules/users/users.entity';
import { UsersService } from '@modules/users/users.service';
import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create new user' })
  @Post('')
  @ApiOkResponse({
    description: 'Create new user successfully',
    type: User,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request.',
  })
  async handleCreateUser(@Body() dto: CreateUserDto): Promise<User> {
    const savedUser = await this.usersService.handleCreateUser(dto);

    return savedUser;
  }
}
