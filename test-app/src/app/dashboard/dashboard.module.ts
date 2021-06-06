import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {StoreModule} from '@ngrx/store';
import { dashboardReducer } from '../store/dashboard/dashboard.reducer';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('dashboard',dashboardReducer),
    FormsModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
