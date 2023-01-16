import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {LocationEntity} from "../../directories/locations/entities/location.entity";

@Entity('candidates')
export class CandidateEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: 'first_name', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;

  @ManyToMany(() => LocationEntity,{ cascade: true, eager: true})
  @JoinTable()
  locations: LocationEntity[]

  @Column({ name: 'position', nullable: false })
  position: string;

  @Column({ name: 'attachment', type: 'varchar', length: 300, nullable: true })
  attachment: string;

  @Column({ name: 'about_me', nullable: false })
  aboutMe: string;

  @Column({ name: 'status', nullable: false })
  status: string;
}
