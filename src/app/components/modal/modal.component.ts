import { Component, OnInit } from '@angular/core';

import { ModalService } from 'src/app/services/modal/modal.service';

interface Task {
  name: string
  done: boolean
}

interface Directory {
  name: string
  tasks: Task[]
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  constructor(private modal: ModalService) { }

  directoryName = ''
  newTasks: string[]
  directory: Directory

  fillFields = () => this.newTasks.push('')

  createTasks = (props: Task): Task => {

    const { name, done } = props

    return {
      name,
      done
    }
  }

  verifyFieldFill = (field: string) => field ?? false

  createNewDirectory = () => {
    const tasks = document.querySelectorAll<HTMLInputElement>('.newTask')
    this.directory.name = this.directoryName

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
