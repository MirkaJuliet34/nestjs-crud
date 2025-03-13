import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'; // Importe a entidade User

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>, // Injetando o repositório do TypeORM
  ) {}

  // Criação de um novo usuário
  async create(username: string, password: string): Promise<User> {
    const user = this.usersRepository.create({ username, password });
    return await this.usersRepository.save(user);
  }

  // Buscar todos os usuários
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  // Buscar um usuário por id
  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  // Atualizar dados do usuário
  async update(id: string, username: string, password: string): Promise<User> {
    await this.usersRepository.update(id, { username, password });
    return this.findOne(id); // Retorna o usuário atualizado
  }

  // Remover um usuário
  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
