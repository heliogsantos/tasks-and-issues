import { Component, OnInit } from '@angular/core';

interface UserLogin {
  email: string
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  user: UserLogin = {
    email: '',
    password: ''
  }

  stopPropagation = (event: Event) => event.stopPropagation()

  ngOnInit(): void {}
}
