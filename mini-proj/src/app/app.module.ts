import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import {HttpClientModule} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { InitUsersEffect } from './users/store/init/init.effect';
import { StoreModule } from '@ngrx/store';
import { reducer } from './users/store/init/init.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    // EffectsModule.forRoot([InitUsersEffect]),
    // StoreModule.forRoot({ users: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
