import { PqrsType } from 'src/pqrs-type/entities/pqrs-type.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pqr {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  pqrs: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true })
  answer: string;

  @Column({ type: 'timestamp', nullable: true })
  answeredAt: Date;

  @ManyToOne(() => PqrsType, { eager: true })
  pqrsType: PqrsType;

  @ManyToOne(() => User, { eager: true })
  user: User;
}
