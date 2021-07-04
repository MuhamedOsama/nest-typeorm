import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column({ default: true })
  inStock: boolean;
}
