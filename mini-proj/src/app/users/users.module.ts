import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './view/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UsersService } from './services/users.service';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[UsersComponent],
  providers:[UsersService]
})
export class UsersModule { }
