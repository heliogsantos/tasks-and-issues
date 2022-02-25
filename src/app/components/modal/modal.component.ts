import { Component, OnInit } from '@angular/core';

import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  constructor(private modal: ModalService) { }

  directoryName = ''

  newTasks: string[] = []

  fillFields = () => this.newTasks.push('')

  createTasks = (name: string, done: boolean) => {
    return {
      name: name,
      done: done
    }
  }

  verifyFieldFill = (field: string) => field ?? false

  createNewDirectory = () => {
    const tasks = document.querySelectorAll('.newTask')
    const directory: any = []

    directory['name'] = this.directoryName
  
    tasks.forEach((task: any) => {
      const field = this.verifyFieldFill(task.value)
      
      if(field) {
        directory.push(this.createTasks(task.value, false))
      }
    })

    setTimeout(() => {
      tasks.forEach((task: any) => {
        task.value = '',
        this.directoryName = ''
        this.newTasks = []
      })
    }, 1000)
  }

  close = () => this.modal.setShowModal(false)

  stopPropagationModal = (event: any) => event.stopPropagation()

  ngOnInit(): void {}
}
