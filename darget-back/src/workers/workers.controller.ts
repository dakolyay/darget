import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";

import {WorkersService} from './workers.service';

@Controller('workers')
export class WorkersController {
    constructor( private readonly workersService: WorkersService){}
    
    @Get()
    getAll() {
        return this.workersService.getAll();
    }

    @Post()
    addWorker(@Body() worker) {
        return this.workersService.addWorker(worker);
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.workersService.getById(id);
    }

    @Post(':id')
    editWorker(@Param('id') id: number, @Body() data) {
        return this.workersService.updateWorker(id,data);
    }

    @Delete(':id')
    deleteWorker(@Param('id') id: number) {
        return this.workersService.deleteWorker(id);
    }
}