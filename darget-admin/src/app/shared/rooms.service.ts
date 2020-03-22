import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Room} from './room.types';

@Injectable({
    providedIn: 'root'
})
export class RoomsService {

    host = 'http://localhost:3000';

    constructor(
        private httpClient: HttpClient
    ){}

    getAll(): Observable<Room[]> {
        return this.httpClient.get<Room[]>(`${this.host}/rooms`);
    }

    getById(id: number) {
        return this.httpClient.get<Room>(`${this.host}/rooms/${id}`);
    }

    update(room: Room) {
        return this.httpClient.put<any>(`${this.host}/rooms/${room.id}`, room);
    }
}