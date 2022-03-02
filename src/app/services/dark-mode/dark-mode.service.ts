import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DarkModeSaveService } from './dark-mode-save.service';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor(private darkModeSave: DarkModeSaveService) {}

  darkMode = new BehaviorSubject<boolean>(
    this.darkModeSave.getDarkModeSave()
  )

  setDarkMode = (props: boolean) => {
    this.darkModeSave.setDarkModeSave(props)
    this.darkMode.next(this.darkModeSave.getDarkModeSave())
  }

  getDarkMode = () => this.darkMode.asObservable()
}