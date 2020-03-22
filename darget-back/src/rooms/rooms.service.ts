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

    getById(id: number) {
        return this.roomRepository.findOne(id);
    }

    createRoom(room: Room) {
        return this.roomRepository.save(room);
    }

    updateRoom(id: number, data: Partial<Room>) {
        return this.roomRepository.update(id,data);
    }

    deleteRoom(id: number) {
        return this.roomRepository.delete(id);
    }


}