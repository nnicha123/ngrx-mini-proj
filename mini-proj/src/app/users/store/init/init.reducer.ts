import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../definitions/user.definition';
import * as fromActions from '../init/init.action';

export interface State extends EntityState<User[]> {
  // additional state property
  selectedUserId: string | null;
}

export const adapter: EntityAdapter<User[]> = createEntityAdapter<User[]>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null,
});

export const usersReducer = createReducer(
  initialState,
  on(fromActions.initUsersSuccess, (state, { users }) => {
    return { ...state, users };
  }),
);
 
export function reducer(state: State | undefined, action: Action) {
  return usersReducer(state, action);
}