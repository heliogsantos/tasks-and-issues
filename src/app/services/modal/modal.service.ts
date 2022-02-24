import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  protected openModal = new BehaviorSubject<boolean>(false)

  setShowModal = (props: boolean) => {
    this.openModal.next(props)
  }

  getModalValue = () => this.openModal.asObservable()
}
