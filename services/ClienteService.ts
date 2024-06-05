// services/ClienteService.ts
import { Injectable } from '@nestjs/common';
import { ClienteRepository } from '../repositories/ClienteRepository';

interface IClienteService {
  getAllClientes(): Promise<Cliente[]>;
  getClienteById(id: number): Promise<Cliente | null>;
  createCliente(cliente: Cliente): Promise<Cliente>;
  updateCliente(cliente: Cliente): Promise<Cliente>;
  deleteCliente(id: number): Promise<void>;
}

@Injectable()
class ClienteService implements IClienteService {
  private readonly repository: ClienteRepository;

  constructor() {
    this.repository = new ClienteRepository();
  }

  async getAllClientes(): Promise<Cliente[]> {
    return this.repository.findAll();
  }

  async getClienteById(id: number): Promise<Cliente | null> {
    return this.repository.findById(id);
  }

  async createCliente(cliente: Cliente): Promise<Cliente> {
    return this.repository.create(cliente);
  }

  async updateCliente(cliente: Cliente): Promise<Cliente> {
    return this.repository.update(cliente);
  }

  async deleteCliente(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}

export default ClienteService;