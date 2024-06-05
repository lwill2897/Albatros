// entities/Direccion.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cliente } from './Cliente';

@Entity()
export class Direccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  calle: string;

  @Column()
  numero: string;

  @Column()
  ciudad: string;

  @Column()
  provincia: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.id)
  cliente: Cliente;
}