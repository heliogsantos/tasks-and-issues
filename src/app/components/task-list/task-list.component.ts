import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs';

import { SelectColorService } from '../header/services/select-color.service';

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

  constructor(
    private selectColorService: SelectColorService
  ) { }

  newTaskItem = '';
  bgButton$: Observable<string>

  showInputEditTask = ''

  tasksList: TaskList[] = [
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Task and issues',
      editing: false
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Task and issues',
      editing: false
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Task and issues',
      editing: false
    },
    {
      label: 'Created module Dicta velit suscipit fugit illum possimus',
      done: false,
      folderName: 'Task and issues',
      editing: false
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Task and issues',
      editing: false
    },
    {
      label: 'Created module Dicta velit suscipit',
      done: false,
      folderName: 'Task and issues',
      editing: false
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Task and issues',
      editing: false
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Task and issues',
      editing: false
    },
  ]

  doneTask = (task: TaskList) => {
    task.done = !task.done
  }

  editTask = (task: TaskList) => {
    task.editing = !task.editing
  } 

  renderWidthNewTaskItem = () => {
    const initialWidth = 5
    const widthFinal = initialWidth + this.newTaskItem.length / 2

    if(widthFinal > 70) return
    
    return widthFinal
  }

  ngOnInit(): void {
    this.bgButton$ = this.selectColorService.getColor()
  }

}
