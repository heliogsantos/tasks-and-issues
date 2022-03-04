import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private showLogin = new BehaviorSubject<boolean>(false)

  setShowLogin = (props: boolean) => this.showLogin.next(props)

  getShowLogin = () => this.showLogin.asObservable()
}
