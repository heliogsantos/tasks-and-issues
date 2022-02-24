import { Component, OnInit } from '@angular/core';

import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modal: ModalService) { }

  close = () => this.modal.setShowModal(false)
  stopPropagationModal = (event: any) => event.stopPropagation()

  ngOnInit(): void {
  }

}
