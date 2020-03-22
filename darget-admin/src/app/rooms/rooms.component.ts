import { Component, OnInit } from '@angular/core';

import {Room} from '../shared/room.types';
import {RoomsService} from '../shared/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor(
    private roomsService: RoomsService
  ) { }

  rooms: Room[] = [];

  ngOnInit(): void {
    this.roomsService.getAll()
    .subscribe(data => {
      console.log(data);
      this.rooms = data;
    })
  }

}
