import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { RoomComponent } from './room/room.component';
import { MeetingComponent } from './meeting/meeting.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomsComponent,
    MeetingsComponent,
    RoomComponent,
    MeetingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
