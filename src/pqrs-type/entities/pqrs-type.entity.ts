import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PqrsType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
