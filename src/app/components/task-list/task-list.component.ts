import { Component, OnInit } from '@angular/core';

interface TaskList {
  label: string;
  done: boolean;
  folderName: string;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  tasksList: TaskList[] = [
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Banco Safra'
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Banco Safra'
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Banco Safra'
    },
    {
      label: 'Created module Dicta velit suscipit, fugit, illum possimus',
      done: false,
      folderName: 'Banco Safra'
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Banco Safra'
    },
    {
      label: 'Created module Dicta velit suscipit, fugit, illum possimus',
      done: false,
      folderName: 'Banco Safra'
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Banco Safra'
    },
    {
      label: 'Created module scmodule',
      done: false,
      folderName: 'Banco Safra'
    },
  ]

  doneTask = (task: TaskList) => {
    task.done = !task.done
  }

  ngOnInit(): void {
  }

}
