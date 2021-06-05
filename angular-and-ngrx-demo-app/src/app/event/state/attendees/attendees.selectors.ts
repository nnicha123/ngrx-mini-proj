import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EventState } from "..";
import * as fromAttendee from './attendees.reducer';
export const getEventState = createFeatureSelector<EventState>('event');
export const getAttendeeState = createSelector(
  getEventState,
  state => state.attendees
)

export const getAttendees = createSelector(
  getAttendeeState,
  fromAttendee.selectAll
)