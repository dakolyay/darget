import { Controller, Get, Post, Body } from "@nestjs/common";

import {MeetingsService} from './meetings.service';

@Controller('meetings')
export class MeetingsController {
    constructor( private readonly meetingsService: MeetingsService){}
    
    @Get()
    getAll() {
        return this.meetingsService.getAll();
    }

    @Post()
    createMeeting(@Body() meeting) {
        return this.meetingsService.createMeeting(meeting);
    }

}