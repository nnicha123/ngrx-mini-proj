import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on,Action } from "@ngrx/store";
import { Tile } from "src/app/models/title.model";
import {addTile,removeTile,updateTile} from './dashboard.actions';

export interface State {
    id:string;
    label:string;
}

export const dashboardAdapter: EntityAdapter<Tile> = createEntityAdapter<
    Tile
>();

const initialState = dashboardAdapter.getInitialState()

export const dashboardReducerFn = createReducer(
    initialState,
    on(addTile, (state, { payload }) => {
        return dashboardAdapter.addOne(payload, state);
    }),
    on(removeTile, (state, { payload }) => {
        return dashboardAdapter.removeOne(payload, state);
    }),
    on(updateTile, (state, { payload }: { payload: Tile }) => {
        return dashboardAdapter.updateOne(
            { id: payload.id, changes: { label:payload.label } },
            state
        );
    })
);

export function dashboardReducer(
    state = initialState,
    action: Action
): EntityState<Tile> {
    return dashboardReducerFn(state, action);
}