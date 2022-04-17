import { User } from './interfacehttp/user';
import { UsersService } from './services/users.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MY GOALS';
  users:User[]

  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.onGetUsers();
    this.onGetUser();
  }
  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => this.users= response,
      (error: any) => console.log(error),
      () => console.log('done geting users')
    );
  }


  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done geting user')
    );
  }
}
