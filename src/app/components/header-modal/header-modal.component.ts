import { Component, Input, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login/login.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss']
})
export class HeaderModalComponent implements OnInit {

  constructor(
    private login: LoginService,
    private modal: ModalService
  ) { }

  @Input() title: string

  close = () => {
    const HIDE_MODAL = false
    this.login.setShowLogin(HIDE_MODAL)
    this.modal.setShowModal(HIDE_MODAL)
  }

  ngOnInit(): void {}

}
