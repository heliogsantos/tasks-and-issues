import { Component, OnInit } from '@angular/core';

import { MenuService } from './components/menu/services/menu';
import { DarkModeService } from './services/dark-mode/dark-mode.service';
import { ModalService } from './services/modal/modal.service';
import { SelectColorService } from './components/header/services/select-color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private menuService: MenuService,
    private darkMode: DarkModeService,
    private modal: ModalService,
    private selectColor: SelectColorService
  ) {}

  asDarkMode = false
  addNewTask = false
  activeColor: string

  closeMenu = (e: any) => {
    const closeMenu = false
    this.menuService.setMenuToggle(closeMenu)
    this.modal.setShowModal(false)
  }

  ngOnInit(): void {
    this.darkMode.getDarkMode().subscribe(props => this.asDarkMode = props)

    this.modal.getModalValue().subscribe(props => this.addNewTask = props)

    this.selectColor.getColor().subscribe(props => this.activeColor = props)
  }
}
