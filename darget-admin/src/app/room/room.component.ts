import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {of} from 'rxjs';
import {catchError, mergeMap} from 'rxjs/operators';

import {Room} from '../shared/room.types';
import {RoomsService} from '../shared/rooms.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  form: FormGroup;
  room: Room;

  constructor(
    private roomsService: RoomsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  // ngOnInit(): void {
  //   this.route.paramMap
  //   .pipe(
  //     mergeMap(params => {
  //       if (params.get('id')) {
  //         return this.categoriesService.getById(+params.get('id'));
  //       }
  //       return of(null);
  //     })
  //   )
  //   .subscribe(category => {
  //     this.category = category;

  //     if (this.category) {
  //       this.form.get('name').setValue(this.category.name);
  //     }
  //   })

  //   this.form = new FormGroup({
  //     name: new FormControl('', Validators.required)
  //   });
  // }

  // onSubmit(){
  //   for (const i in this.form.controls) {
  //     if (this.form.controls[i]) {
  //       this.form.controls[i].markAsDirty();
  //       this.form.controls[i].updateValueAndValidity()
  //     }
  //   }

  //   if(!this.form.valid) {
  //     return;
  //   }

  //   this.categoriesService.create(this.form.value)
  //     .pipe(catchError((err) => of(null)))
  //       .subscribe(res => {
  //         if (res && res.id) {
  //           this.router.navigate(['home', 'categories']);
  //         }
  //       })
  // }
  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      // imageUrl: new FormControl(''),
    });

    this.route.paramMap
    .pipe(
      mergeMap(params => {
        if (params.get('id')) {
          return this.roomsService.getById(+params.get('id'));
        }
        return of(null);
      })
    )
    .subscribe(room => {
      this.room = room;

      if (this.room) {
        this.form.patchValue(this.room);
      }
    });
  }

  onSubmit() {
    for (const i in this.form.controls) {
       if (this.form.controls[i]) {
        this.form.controls[i].markAsDirty();
        this.form.controls[i].updateValueAndValidity();
       }
    }

    if (!this.form.valid) {
      return;
    }

    // this.isLoading = true;
    if (this.room) {
      this.roomsService.update({...this.room, ...this.form.value})
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res) {
          this.router.navigate(['home', 'rooms']);
        }
        // this.isLoading = false;
      });
      return;
    }

    // this.roomsService.create(this.form.value)
    //   .pipe(catchError(() => of(null)))
    //   .subscribe(res => {
    //     if (res && res.id) {
    //       this.router.navigate(['home', 'categories']);
    //       // this.isLoading = false;
    //     }
    //   });
  }

}
