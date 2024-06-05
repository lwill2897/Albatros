// entities/Cliente.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Direccion } from './Direccion';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  email: string;

  @OneToMany(() => Direccion, (direccion) => direccion.cliente)
  direcciones: Direccion[];
}