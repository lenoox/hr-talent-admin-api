import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('seniorities')
export class SeniorityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'seniority_key', nullable: false })
  key: string;

  @Column({ name: 'seniority_name', nullable: false })
  name: string;
}
