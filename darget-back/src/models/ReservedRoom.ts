import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";

import { Room } from "./Room";
import {Worker} from './Worker';
import { Meeting } from "./Meeting";

@Entity({name: 'reservedRoom'})
export class ReservedRoom {
    @PrimaryGeneratedColumn()
    reservingId: number;

    @OneToOne(type => Room, room => room.id)
    room: Room;

    @OneToOne(type => Worker, worker => worker.id)
    worker: Worker;

    @OneToOne(type => Meeting, meeting => meeting.id)
    meeting: Meeting;

    // @OneToOne(type => Meeting, meeting => meeting.duration)
    // duration: Date;
}