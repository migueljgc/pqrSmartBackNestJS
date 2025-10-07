import { Role } from 'src/auth/enums/role.enum';
import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    // Cambia según tu enum
  })
  role: Role;

  @Column('bigint')
  number: string;
}
