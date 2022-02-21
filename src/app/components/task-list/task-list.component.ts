import { Component, OnInit } from '@angular/core';

interface TaskList {
  label: string;
  done: boolean;
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
      done: false
    },
    {
      label: 'Created module scmodule',
      done: true
    },
    {
      label: 'Created module scmodule',
      done: false
    },
    {
      label: 'Created module Dicta velit suscipit, fugit, illum possimus',
      done: false
    },
    {
      label: 'Created module scmodule',
      done: false
    },
    {
      label: 'Created module Dicta velit suscipit, fugit, illum possimus',
      done: false
    },
    {
      label: 'Created module scmodule',
      done: false
    },
    {
      label: 'Created module scmodule',
      done: false
    },
  ]

  doneTask = (task: TaskList) => {
    task.done = !task.done
  }

  ngOnInit(): void {
  }

}
