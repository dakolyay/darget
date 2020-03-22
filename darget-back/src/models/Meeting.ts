import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Room } from "./Room";

@Entity({name: 'meetings'})
export class Meeting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    // @OneToOne(type => Room, room => room.id)
    // room: Room;

    // @OneToOne(type => Worker, room => room.id)
    // room: Room;

    // @Column()
    // duration: Date;
}