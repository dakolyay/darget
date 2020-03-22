import { Controller, Get, Post, Body } from "@nestjs/common";

import {WorkersService} from './workers.service';

@Controller('rooms')
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

}