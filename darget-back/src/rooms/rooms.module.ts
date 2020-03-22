import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {Room} from '../models/Room';
import {RoomsService} from './rooms.service';
import {RoomsController} from './rooms.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Room])
    ],
    exports: [
        TypeOrmModule
    ],
    controllers: [RoomsController],
    providers: [
        RoomsService,
    ],
})
export class RoomsModule {}