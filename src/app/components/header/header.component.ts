import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu/services/menu';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Colors } from './services/colors';
import { SelectColorService } from './services/select-color.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private menuService: MenuService,    
    private darkMode: DarkModeService,
    private modal: ModalService,
    private selectColorTreme: SelectColorService 
  ) {}

  asDarkMode = false
  DEFAULT_COLOR = '#FFFFFF'
  toggleColors: string[] = new Colors().colors
  activeColor: any = '#FFFFFF'
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
    if(!this.asDarkMode) {
      this.showColors = !this.showColors
    }
  }

  selectColor = (color: string) => {
    this.selectColorTreme.setColor(color)
    this.activeColor = localStorage.getItem('save-color')
    this.showColors = false

  }

  ngOnInit(): void {
    this.darkMode.getDarkMode().subscribe(props => {
      this.asDarkMode = props
      if(this.asDarkMode) {
        const DISABLED_COLOR = '#272727'
        this.activeColor = DISABLED_COLOR
      } else {
        this.activeColor = localStorage.getItem('save-color')
      }
    })
  }
}
