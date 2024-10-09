import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/req/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(dto: CreateUserDTO) {
    return this.userRepository.createUser(dto);
  }
}
