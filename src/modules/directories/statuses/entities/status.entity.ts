import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {CandidateEntity} from "../../../candidates/entities/candidate.entity";

@Entity('statuses')
export class StatusEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: 'status_key', nullable: false })
  key: string;

  @Column({ name: 'status_name', nullable: false })
  name: string;

  @OneToMany(() => CandidateEntity, (photo) => photo.status)
  statuses: CandidateEntity[]
}
