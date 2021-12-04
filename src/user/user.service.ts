import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async createOrUpdateUser(user: User): Promise<User> {
    const _user = await this.findOne(user);
    if (_user) {
      return this.update(_user);
    } else {
      return this.save(user);
    }
  }

  async findOne(user: User): Promise<User> {
    return this.repository.findOne(user.id);
  }

  async save(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async update(user: User): Promise<User> {
    return this.repository.save(user);
  }
}
