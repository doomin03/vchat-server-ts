import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "room" }) // 실제 테이블 이름
export class Room {
  @PrimaryGeneratedColumn({ type: "bigint", unsigned: true })
  id!: number;

  @Column({ name: "room_name", type: "varchar", length: 10 })
  roomName!: string;

  @Column({ name: "master_name", type: "varchar", length: 8 })
  masterName!: string;
}
