import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeSaveService {

  constructor() { }

  private readonly _DARK_MODE = 'dark-mode'
  private readonly _DARK_MODE_ACTIVE = 'active'
  private readonly _DARK_MODE_DISABLED = 'disabled'

  getDarkModeSave = (): boolean => {
    let isDarkMode: boolean

    if(localStorage.getItem(this._DARK_MODE) === this._DARK_MODE_ACTIVE) {
      isDarkMode = true
    } else {
      isDarkMode = false
    }

    return isDarkMode
  }

  setDarkModeSave = (props: boolean) => {
    let isDarkMode: string
    
    if(props) {
      isDarkMode = this._DARK_MODE_ACTIVE
    } else {
      isDarkMode = this._DARK_MODE_DISABLED
    }

    localStorage.setItem(this._DARK_MODE, isDarkMode)
  }
}
