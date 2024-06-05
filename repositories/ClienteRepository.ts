// repositories/ClienteRepository.ts
import { Repository } from 'typeorm';
import { Cliente } from '../Entities/Cliente';

interface IClienteRepository {
  findAll(): Promise<Cliente[]>;
  findById(id: number): Promise<Cliente | null>;
  create(cliente: Cliente): Promise<Cliente>;
  update(cliente: Cliente): Promise<Cliente>;
  delete(id: number): Promise<void>;
}

class ClienteRepository extends Repository<Cliente> implements IClienteRepository {
  async findAll(): Promise<Cliente[]> {
    return this.find();
  }

  async findById(id: number): Promise<Cliente | null> {
    return this.findOne(id);
  }

  async create(cliente: Cliente): Promise<Cliente> {
    return this.save(cliente);
  }

  async update(cliente: Cliente): Promise<Cliente> {
    return this.save(cliente);
  }

  async delete(id: number): Promise<void> {
    await this.delete(id);
  }
}

export default ClienteRepository;