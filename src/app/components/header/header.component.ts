import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu/services/menu';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Colors } from './services/colors';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private menuService: MenuService,    
    private darkMode: DarkModeService,
    private modal: ModalService
  ) {}

  asDarkMode = false
  toggleColors: string[] = new Colors().colors
  activeColor: string
  showColors = false

  openMenu = (e: any) => {
    const showMenu = true
    this.menuService.setMenuToggle(showMenu)
    e.stopPropagation()
  }

  handleDarkMode = (event: any) => {
    if(this.asDarkMode) {
      this.darkMode.setDarkMode(false)
    } else {
      this.darkMode.setDarkMode(true)
    } 
    event.stopPropagation()
  }

  openModal = (event: any) => {
    event.stopPropagation()
    this.modal.setShowModal(true)
  }

  openToggleColors = () => {
    this.showColors = !this.showColors
  }

  selectColor = (color: string) => this.activeColor = color

  ngOnInit(): void {
    this.darkMode.getDarkMode().subscribe(props => this.asDarkMode = props)
  }
}
