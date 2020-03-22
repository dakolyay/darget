import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Meeting} from './meeting.types';

@Injectable({
    providedIn: 'root'
})
export class MeetingsService {

    host = 'http://localhost:3000';

    constructor(
        private httpClient: HttpClient
    ){}

    getAll(): Observable<Meeting[]> {
        return this.httpClient.get<Meeting[]>(`${this.host}/meetings`);
    }

}