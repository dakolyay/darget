import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import {Meeting} from '../models/Meeting';

@Injectable()
export class MeetingsService {

    constructor(
        @InjectRepository(Meeting)
        private readonly meetingRepository: Repository<Meeting>
    ){}

    getAll() {
        return this.meetingRepository.find();
    }

    getById(id: number) {
        return this.meetingRepository.findOne(id);
    }

    createMeeting(meeting: Meeting) {
        return this.meetingRepository.save(meeting);
    }

    updateMeeting(id: number, data: Partial<Meeting>) {
        return this.meetingRepository.update(id,data);
    }

    deleteMeeting(id: number){
        return this.meetingRepository.delete(id);
    }
}