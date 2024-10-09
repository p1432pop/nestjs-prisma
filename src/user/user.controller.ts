import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/req/create-user.dto';
import { UpdateUserDTO } from './dto/req/update-user.dto';
import { UserDTO } from './dto/res/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDTO): Promise<UserDTO> {
    return this.userService.createUser(dto);
  }

  @Put('/:email')
  async updateUser(
    @Param('email') email: string,
    @Body() dto: UpdateUserDTO,
  ): Promise<UserDTO> {
    return this.userService.updateUser(email, dto);
  }

  @Delete('/:email')
  async deleteUser(@Param('email') email: string): Promise<UserDTO> {
    return this.userService.deleteUser(email);
  }
}
