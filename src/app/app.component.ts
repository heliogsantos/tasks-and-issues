import { Component, OnInit } from '@angular/core';

import { MenuService } from './components/menu/services/menu';
import { DarkModeService } from './services/dark-mode/dark-mode.service';
import { ModalService } from './services/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private menuService: MenuService,
    private darkMode: DarkModeService,
    private modal: ModalService
  ) {}

  asDarkMode = false
  addNewTask = false

  closeMenu = (e: any) => {
    const closeMenu = false
    this.menuService.setMenuToggle(closeMenu)
    this.modal.setShowModal(false)
  }

  ngOnInit(): void {
    this.darkMode.getDarkModde().subscribe(props => this.asDarkMode = props)
    this.modal.getModalValue().subscribe(props => this.addNewTask = props)
  }
}
