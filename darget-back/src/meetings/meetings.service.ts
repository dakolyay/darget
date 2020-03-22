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

    createMeeting(meeting: Meeting) {
        return this.meetingRepository.save(meeting);
    }
}