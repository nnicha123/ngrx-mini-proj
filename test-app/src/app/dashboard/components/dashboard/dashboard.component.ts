import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { getDashboard } from 'src/app/store/dashboard/dashboard.selectors';
import {addTile} from '../../../store/dashboard/dashboard.actions';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title:string = 'First Title'
  title$:Observable<string>;
  newTitle:string = '';
  constructor(private store:Store<any>) {
    this.title$ = this.store.pipe(select(getDashboard))
    // this.store.subscribe(el => console.log(el))
   }

  onClick(){
    this.store.dispatch(addTile({payload:{id:'1',label:'new'}}))
  }

  ngOnInit(): void {
    
  }

}
