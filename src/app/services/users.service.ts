import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfacehttp/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  private apiUrl =environment.apiUrl;
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users`)
  }

  getUser():Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/1`)
  }
}
