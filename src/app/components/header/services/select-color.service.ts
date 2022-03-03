import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectColorService {

  constructor() { }

  private COLOR_DEFAULT = '#FFFFFF'
  private SAVECOLOR = 'save-color'

  private activeColor = new BehaviorSubject<string>(
    localStorage.getItem(this.SAVECOLOR) ?? this.COLOR_DEFAULT
  )

  setColor = (props: string) => {
    this.activeColor.next(props)
    localStorage.setItem(this.SAVECOLOR, props)
    
  }

  getColor = () => this.activeColor.asObservable()
  
}