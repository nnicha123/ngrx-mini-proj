import { createAction, props } from '@ngrx/store';
import {Tile} from '../../models/title.model';

export enum DashboardActionTypes {
  AddTile = '[Dashboard] ADD_TILE',
  RemoveTile = '[Dashboard] REMOVE_TILE',
  UpdateTile = '[Dashboard] UPDATE_TILE'
}

export const addTile = createAction(
  DashboardActionTypes.AddTile, // action name
  props<{ payload: Tile }>() // action payload type
);

export const removeTile = createAction(
  DashboardActionTypes.RemoveTile,
  props<{ payload: string }>()
);

export const updateTile = createAction(
  DashboardActionTypes.UpdateTile,
  props<{ payload: Tile }>()
);