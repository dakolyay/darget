import { Component, OnInit } from '@angular/core';

import {Worker} from '../shared/worker.types';
import {WorkersService} from '../shared/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  constructor(
    private workersService: WorkersService
  ) { }

  workers: Worker[] = [];

  ngOnInit(): void {
    this.workersService.getAll()
    .subscribe(data => {
      console.log(data);
      this.workers = data;
    })
  }

}
