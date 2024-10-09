import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/req/create-user.dto';
import { UpdateUserDTO } from './dto/req/update-user.dto';
import { UserDTO } from './dto/res/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(dto: CreateUserDTO): Promise<UserDTO> {
    return this.userRepository.createUser(dto);
  }

  async updateUser(email: string, dto: UpdateUserDTO): Promise<UserDTO> {
    return this.userRepository.updateUser({
      where: { email },
      data: dto,
    });
  }

  async deleteUser(email: string): Promise<UserDTO> {
    return this.userRepository.deleteUser({ email });
  }
}
