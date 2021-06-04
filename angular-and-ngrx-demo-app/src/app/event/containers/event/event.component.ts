import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Attendee } from 'src/app/models';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  attendees$:Observable<Attendee[]> = of([]);
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.getAttendees();
  }

  getAttendees(){
    this.attendees$ = this.eventService.getAttendees();
  }

  // addAttendee(attendee:Attendee){
  //   this.attendees = [...this.attendees, attendee];
  //   console.log('TCL: EventComponent -> addAttendee -> this.attendees', this.attendees)
  // }

}
