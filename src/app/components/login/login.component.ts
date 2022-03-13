import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SelectColorService } from '../header/services/select-color.service';

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

  constructor(
    private selectColorTreme: SelectColorService 
  ) { }

  bgButton$: Observable<string>

  user: UserLogin = {
    email: '',
    password: ''
  }

  stopPropagation = (event: Event) => event.stopPropagation()

  ngOnInit(): void {
    this.bgButton$ = this.selectColorTreme.getColor()
  }
}
