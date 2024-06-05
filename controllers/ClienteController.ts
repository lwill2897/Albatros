// controllers/ClienteController.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ClienteService } from '../services/ClienteService';
import { Cliente } from '../Entities/Cliente';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  async getAllClientes(): Promise<Cliente[]> {
    return this.clienteService.getAllClientes();
  }

  @Get(':id')
  async getClienteById(@Param('id') id: number): Promise<Cliente | null> {
    return this.clienteService.getClienteById(id);
  }

  @Post()
  async createCliente(@Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.createCliente(cliente);
  }

  @Put(':id')
  async updateCliente(@Param('id') id: number, @Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.updateCliente(cliente);
  }

  @Delete(':id')
  async deleteCliente(@Param('id') id: number): Promise<void> {
    return this.clienteService.deleteCliente(id);
  }
}