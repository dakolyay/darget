import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {Meeting} from '../models/Meeting';
import {MeetingsService} from './meetings.service';
import {MeetingsController} from './meetings.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Meeting])
    ],
    exports: [
        TypeOrmModule
    ],
    controllers: [MeetingsController],
    providers: [
        MeetingsService,
    ],
})
export class MeetingsModule {}