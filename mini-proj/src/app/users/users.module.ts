import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './view/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UsersService } from './services/users.service';
import { EffectsModule } from '@ngrx/effects';
import { InitUsersEffect } from './store/init/init.effect';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/init/init.reducer';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forRoot([InitUsersEffect]),
    StoreModule.forRoot({ users: reducer })
  ],
  exports:[UsersComponent],
  providers:[UsersService]
})
export class UsersModule { }
