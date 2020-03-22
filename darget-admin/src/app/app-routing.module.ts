import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component'
import { RoomsComponent } from './rooms/rooms.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { RoomComponent } from './room/room.component';
import {MeetingComponent} from './meeting/meeting.component';

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
          }
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
