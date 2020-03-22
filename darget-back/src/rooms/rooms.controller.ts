import { Controller, Get, Post, Body } from "@nestjs/common";

import { RoomsService } from "./rooms.service";


@Controller('rooms')
export class RoomsController {
    constructor( private readonly roomsService: RoomsService){}
    
    @Get()
    getAll() {
        return this.roomsService.getAll();
    }

    @Post()
    createRoom(@Body() room) {
        return this.roomsService.createRoom(room);
    }

}