import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {LocationEntity} from "../../../shared/entities/location.entity";
import {SeniorityEntity} from "../../../shared/entities/seniority.entity";

@Entity('job_offers')
export class JobOfferEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: 'offer_position', nullable: false })
  position: string;

  @Column({ name: 'offer_description', nullable: false })
  offerDescription: string;

  @ManyToMany(() => SeniorityEntity, { cascade: true, eager: true})
  @JoinTable()
  seniorities: SeniorityEntity[];

  @ManyToMany(() => LocationEntity,{ cascade: true, eager: true})
  @JoinTable()
  locations: LocationEntity[]
}
