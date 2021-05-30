import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from 'src/app/users/store'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.actions.initUsers())
  }

}
