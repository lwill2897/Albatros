// entities/PedidoDetalle.ts
import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { Pedido } from './Pedido';

@Entity()
export class PedidoDetalle {
  @ObjectIdColumn()
  id: string;

  @Column()
  cantidad: number;

  @Column()
  precio: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.id)
  pedido: Pedido;
}