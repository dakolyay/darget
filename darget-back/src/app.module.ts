import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';

import {Room} from './models/Room';
import {RoomsModule} from './rooms/rooms.module';
import {Worker} from './models/Worker';
import { WorkersModule } from './workers/workers.module';
import {Meeting} from './models/Meeting';
import {MeetingsModule} from './meetings/meetings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '217.182.72.53',
      username: 'dariya',
      password: 'WiBo54xE',
      database: 'dariyaDB',
      entities: [
        Room,
        Worker,
        Meeting,
        // User, 
        // Category,
        // Questionnaire,
        // Question
      ],
      synchronize: true,
    }),
    RoomsModule,
    WorkersModule,
    MeetingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
