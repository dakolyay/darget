import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Worker} from './worker.types';

@Injectable({
    providedIn: 'root'
})
export class WorkersService {

    host = 'http://localhost:3000';

    constructor(
        private httpClient: HttpClient
    ){}

    getAll(): Observable<Worker[]> {
        return this.httpClient.get<Worker[]>(`${this.host}/workers`);
    }

    getById(id: number) {
        return this.httpClient.get<Worker>(`${this.host}/workers/${id}`);
    }

    update(worker: Worker) {
        return this.httpClient.put<any>(`${this.host}/workers/${worker.id}`, worker);
    }
}