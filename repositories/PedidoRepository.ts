// repositories/PedidoRepository.ts
import { Repository } from 'typeorm';
import { Pedido } from '../entities/Pedido';

interface IPedidoRepository {
  findAll(): Promise<Pedido[]>;
  findById(id: string): Promise<Pedido | null>;
  create(pedido: Pedido): Promise<Pedido>;
  update(pedido: Pedido): Promise<Pedido>;
  delete(id: string): Promise<void>;
}

class PedidoRepository extends Repository<Pedido> implements IPedidoRepository {
  async findAll(): Promise<Pedido[]> {
    return this.find();
  }

  async findById(id: string): Promise<Pedido | null> {
    return this.findOne(id);
  }

  async create(pedido: Pedido): Promise<Pedido> {
    return this.save(pedido);
  }

  async update(pedido: Pedido): Promise<Pedido> {
    return this.save(pedido);
  }

  async delete(id: string): Promise<void> {
    await this.delete(id);
  }
}

export default PedidoRepository;