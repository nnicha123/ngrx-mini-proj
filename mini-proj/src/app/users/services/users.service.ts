import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../definitions/user.definition';
import {catchError, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersURL = 'http://localhost:3000/users'
  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.usersURL)
    .pipe(take(1))
  }
}
