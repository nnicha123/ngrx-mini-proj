import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
// import { ModuleEntityState } from "../definition/store.definition";
import {Actions,createEffect,ofType} from '@ngrx/effects';
import * as fromActions from './init.action';
import { catchError, map, mergeMap } from "rxjs/operators";
import { UsersService } from "src/app/users/services/users.service";
import { User } from "src/app/users/definitions/user.definition";
import { of } from "rxjs";

@Injectable()
export class InitUsersEffect{
  constructor(private store:Store<any>,private actions$:Actions,private usersService:UsersService){}

  initData$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromActions.initUsers),
      mergeMap(() => {
        return this.usersService.getUsers().pipe(
          map((users:User[]) => {
            console.log(users)
            return fromActions.initUsersSuccess({users})
          }),
          catchError((error:any) => {
            return of(fromActions.initUsersFailure({error}))
          })
        )
      })
    )
  )
}