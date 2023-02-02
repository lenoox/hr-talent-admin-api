import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {LocationEntity} from "../../directories/locations/entities/location.entity";
import {StatusEntity} from "../../directories/statuses/entities/status.entity";

@Entity('candidates')
export class CandidateEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: 'first_name', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;

  @ManyToOne(() => LocationEntity,{ cascade: true, eager: true})
  @JoinTable()
  locations: LocationEntity[]

  @Column({ name: 'position', nullable: false })
  position: string;

  @Column({ name: 'attachment', type: 'varchar', length: 300, nullable: true })
  attachment: string;

  @Column({ name: 'about_me', nullable: false })
  aboutMe: string;

  @ManyToOne(() => StatusEntity, (user) => user.statuses,{ cascade: true, eager: true})
  status: StatusEntity
}
