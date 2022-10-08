import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class JobOfferEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'job_description', nullable: false })
  jobDescription: string;
}
