import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import {Worker} from '../models/Worker';

@Injectable()
export class WorkersService {

    constructor(
        @InjectRepository(Worker)
        private readonly workerRepository: Repository<Worker>
    ){}

    getAll() {
        return this.workerRepository.find();
    }

    getById(id: number) {
        return this.workerRepository.findOne(id);
    }

    addWorker(worker: Worker) {
        return this.workerRepository.save(worker);
    }

    updateWorker(id: number, data: Partial<Worker>) {
        return this.workerRepository.update(id,data);
    }

    deleteWorker(id: number) {
        return this.workerRepository.delete(id);
    }

}