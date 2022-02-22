import { Component, OnInit } from '@angular/core'

interface TaskList {
  label: string
  done: boolean
  folderName: string,
  editing: boolean
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  showInputEditTask = ''

  tasksList: TaskList[] = [
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Banco Safra',
      editing: false
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Banco Safra',
      editing: false
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Banco Safra',
      editing: false
    },
    {
      label: 'Created module Dicta velit suscipit fugit illum possimus',
      done: false,
      folderName: 'Banco Safra',
      editing: false
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Banco Safra',
      editing: false
    },
    {
      label: 'Created module Dicta velit suscipit',
      done: false,
      folderName: 'Banco Safra',
      editing: false
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Banco Safra',
      editing: false
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Banco Safra',
      editing: false
    },
  ]

  doneTask = (task: TaskList) => {
    task.done = !task.done
  }

  editTask = (task: TaskList) => {
    task.editing = !task.editing
  } 

  ngOnInit(): void {
  }

}
