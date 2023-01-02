import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locations')
export class LocationEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: 'location_key', nullable: false })
  key: string;

  @Column({ name: 'location_name', nullable: false })
  name: string;

}