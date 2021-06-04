import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Attendee } from 'src/app/models';
import { StartSpinner, StopSpinner } from 'src/app/state/spinner/spinner.actions';
import { State } from 'src/app/state/spinner/spinner.reducer';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  spinner$:Observable<boolean>;
  attendees$:Observable<Attendee[]>;
  constructor(private store:Store<State>,private eventService:EventService) {
    this.attendees$ = this.eventService.getAttendees();
    this.spinner$ = this.store.pipe(select(state => state.isOn))
   }

   getAttendees(){
     this.attendees$ = this.eventService.getAttendees();
   }

  addAttendee(attendee:Attendee){
    this.store.dispatch(new StartSpinner());
    this.eventService.addAttendee(attendee).subscribe(() => {
      this.store.dispatch(new StopSpinner());
      this.getAttendees();
    });
  }

}
