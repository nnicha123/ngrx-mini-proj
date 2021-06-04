import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Attendee } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAttendees():Observable<Attendee[]>{
    return of([
      {
        name:'Duncan',
        attending:true,
        guests:0
      }
    ] as Attendee[])
  }
}
