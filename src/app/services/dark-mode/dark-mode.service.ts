import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }

  darkMode = new BehaviorSubject<boolean>(false)

  setDarkMode = (props: boolean) => this.darkMode.next(props)

  getDarkModde = () => this.darkMode.asObservable()
}
