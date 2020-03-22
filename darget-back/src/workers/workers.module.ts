import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {Worker} from '../models/Worker';
import {WorkersService} from './workers.service';
import {WorkersController} from './workers.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Worker])
    ],
    exports: [
        TypeOrmModule
    ],
    controllers: [WorkersController],
    providers: [
        WorkersService,
    ],
})
export class WorkersModule {}