import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { Room } from "src/models/Room";

@Injectable()
export class RoomsService {

    constructor(
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>
    ){}

    getAll() {
        return this.roomRepository.find();
    }

    createRoom(room: Room) {
        return this.roomRepository.save(room);
    }
}