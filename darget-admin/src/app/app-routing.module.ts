import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component'
import { RoomsComponent } from './rooms/rooms.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { RoomComponent } from './room/room.component';
import {MeetingComponent} from './meeting/meeting.component';
import { WorkersComponent } from './workers/workers.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        children: [
          {
            path: 'rooms',
            component: RoomsComponent,
          },
          {
            path: 'meetings',
            component: MeetingsComponent,
          },
          {
            path: 'workers',
            component: WorkersComponent,
          },
          {
            path: 'room',
            component: RoomComponent,
          },
          {
            path: 'room/:id',
            component: RoomComponent,
          },
          {
            path: 'meeting',
            component: MeetingComponent,
          },
          {
            path: 'meeting/:id',
            component: MeetingComponent,
          },
          {
            path: 'worker',
            component: WorkerComponent,
          },
          {
            path: 'worker/:id',
            component: WorkerComponent,
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
