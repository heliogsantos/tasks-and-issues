import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu';

interface Task {
  title: string;
  isseus: Array<string>;
  open: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  showMenu = false

  tasks: Task[] = [
    {
      title: 'Banco Safra',
      isseus: ['Created module scmodule', 'Created module', 'Created module scmodule'],
      open: false
    },{
      title: 'Projeto To-Do',
      isseus: ['Created module scmodule', 'Created module', 'Created module scmodule'],
      open: false
    },{
      title: 'Melhorias Projeto Previdencia',
      isseus: ['Created module scmodule', 'Created module', 'Created module scmodule'],
      open: false
    }
  ]

  closeNaveBar = () => {
    this.showMenu = !this.showMenu
    this.menuService.setMenuToggle(this.showMenu)
  }

  stopPropagationNavigation = (e: any) => e.stopPropagation()

  closeSubTasks = () => {
    this.tasks.forEach(task => {
      task.open = false
    })
  }

  openSubTasks = (task: Task) => {
    this.closeSubTasks()
    task.open = true
  }


  ngOnInit(): void {
    this.menuService.getMenuToggle().subscribe(props => {
      this.showMenu = props
    })
  }

}
