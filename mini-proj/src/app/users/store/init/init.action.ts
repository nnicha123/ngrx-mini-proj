import {createAction, props} from '@ngrx/store';
import {User} from 'src/app/users/definitions/user.definition';

enum UsersAction{
  INIT_USERS = '[Users] Init Users',
  INIT_USERS_SUCCESS = '[Users] Init Users Success',
  INIT_USERS_FAILURE = '[Users] Init Users Failure'
}

export const initUsers = createAction(
  UsersAction.INIT_USERS
);

export const initUsersSuccess = createAction(
  UsersAction.INIT_USERS_SUCCESS,
  props<{
    users:User[]
  }>()
)

export const initUsersFailure = createAction(
  UsersAction.INIT_USERS_FAILURE,
  props<{
    error:any
  }>()
);