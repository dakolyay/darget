import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";

import {MeetingsService} from './meetings.service';

@Controller('meetings')
export class MeetingsController {
    constructor( private readonly meetingsService: MeetingsService){}
    
    @Get()
    getAll() {
        return this.meetingsService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.meetingsService.getById(id);
    }

    @Post()
    addMeeting(@Body() meeting) {
        return this.meetingsService.createMeeting(meeting);
    }

    @Post(':id')
    editMeeting(@Param('id') id: number, @Body() data) {
        return this.meetingsService.updateMeeting(id, data);
    }

    @Delete(':id')
    deleteMeeting(@Param('id') id: number) {
        return this.meetingsService.deleteMeeting(id);
    }

}