import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/req/create-user.dto';
import { UpdateUserDTO } from './dto/req/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDTO) {
    return this.userService.createUser(dto);
  }

  @Put('/:email')
  async updateUser(@Param('email') email: string, @Body() dto: UpdateUserDTO) {
    return this.userService.updateUser(email, dto);
  }
}
