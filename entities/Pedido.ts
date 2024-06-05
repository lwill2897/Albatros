// entities/Pedido.ts
import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { Cliente } from './Cliente';

@Entity()
export class Pedido {
  @ObjectIdColumn()
  id: string;

  @Column()
  fecha: Date;

  @Column()
  total: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.id)
  cliente: Cliente;

  @OneToMany(() => PedidoDetalle, (pedidoDetalle) => pedidoDetalle.pedido)
  detalles: PedidoDetalle[];
}
