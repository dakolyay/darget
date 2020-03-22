import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";

import { RoomsService } from "./rooms.service";


@Controller('rooms')
export class RoomsController {
    constructor( private readonly roomsService: RoomsService){}
    
    @Get()
    getAll() {
        return this.roomsService.getAll();
    }

    @Post()
    addRoom(@Body() room) {
        return this.roomsService.createRoom(room);
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.roomsService.getById(id);
    }

    @Post(':id')
    editRoom(@Param('id') id: number, @Body() data) {
        return this.roomsService.updateRoom(id, data);
    }

    @Delete(':id')
    deleteRoom(@Param('id') id: number) {
        return this.roomsService.deleteRoom(id);
    }
}