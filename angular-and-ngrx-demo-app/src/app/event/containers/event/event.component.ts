import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Attendee } from 'src/app/models';
import { StartSpinner, StopSpinner } from 'src/app/state/spinner/spinner.actions';
import { State } from '../../state';
import { EventService } from '../../services/event.service';
import {getSpinner} from '../../../state/spinner/spinner.selectors';
import { AddAttendee, LoadAttendees } from '../../state/attendees/attendees.actions';
import { getAttendees } from '../../state/attendees/attendees.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  spinner$:Observable<boolean>;
  attendees$:Observable<Attendee[]>;
  constructor(private store:Store<State>,private eventService:EventService, private router:Router) {
    this.spinner$ = this.store.pipe(select(getSpinner))
    this.attendees$ = this.store.pipe(select(getAttendees));
    this.store.dispatch(new LoadAttendees());
   }

  addAttendee(attendee:Attendee){
    this.store.dispatch(new AddAttendee(attendee));
  }

  navigate(filterBy:string){
    this.router.navigateByUrl(`/event?filterBy=${filterBy}`);
  }

}
