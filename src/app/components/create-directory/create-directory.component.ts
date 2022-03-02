import { Component, OnInit } from '@angular/core';

import { ModalService } from 'src/app/services/modal/modal.service';
import { Directory, Task } from './models/directory.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './create-directory.component.html',
  styleUrls: ['./create-directory.component.scss']
})

export class CreateDirectoryComponent implements OnInit {

  constructor(private modal: ModalService) { }

  fillTasks: string[] = []

  directory: Directory = {
    name: '',
    tasks: []
  }

  fillFields = () => this.fillTasks.push('')

  createTasks = (props: Task): Task => {
    const { name, done } = props

    return {
      name,
      done
    }
  }

  clearFieldsModal = (tasks: any) => {
    setTimeout(() => {
      tasks.forEach((task: any) => {
        task.value = '',
        this.directory.name = ''
        this.fillTasks = []
      })
    }, 1000)
  }

  verifyFieldFill = (field: string) => field ?? false

  createNewDirectory = () => {
    const tasks = document.querySelectorAll<HTMLInputElement>('.newTask')

    tasks.forEach((task) => {
      const fillFields = this.verifyFieldFill(task.value)
      
      if(fillFields) {
        const newTask: Task = {
          name: task.value,
          done: false
        }

        this.directory.tasks.push(this.createTasks(newTask))
      }
    })

    this.clearFieldsModal(tasks)
  }

  close = () => this.modal.setShowModal(false)

  stopPropagationModal = (event: any) => event.stopPropagation()

  ngOnInit(): void {}
}
