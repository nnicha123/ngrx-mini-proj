import { createFeatureSelector, createSelector } from "@ngrx/store";
import {State} from './dashboard.reducer'
export const getDashboardState = createFeatureSelector<State>('dashboard');

export const getDashboard = createSelector(
  getDashboardState,
  (state:any) => state.entities[1]
)