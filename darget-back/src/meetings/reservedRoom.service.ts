import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import {Meeting} from '../models/Meeting';
import { ReservedRoom } from "src/models/ReservedRoom";

@Injectable()
export class ReservedRoomService {

    constructor(
        @InjectRepository(ReservedRoom)
        private readonly reservedRoomRepository: Repository<ReservedRoom>
    ){}

    getAll() {
        return this.reservedRoomRepository.find();
    }

    reserveRoom(reservedRoom: ReservedRoom) {
        return this.reservedRoomRepository.save(reservedRoom);
    }
}