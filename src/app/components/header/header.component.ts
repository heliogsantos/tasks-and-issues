import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu/services/menu';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private menuService: MenuService,    
    private darkMode: DarkModeService

  ) { }

  asDarkMode = false

  openMenu = (e: any) => {
    const showMenu = true
    this.menuService.setMenuToggle(showMenu)
    e.stopPropagation()
  }

  handleDarkMode = () => {
    if(this.asDarkMode) {
      this.darkMode.setDarkMode(false)
    } else {
      this.darkMode.setDarkMode(true)
    } 
  }

  ngOnInit(): void {
    this.darkMode.getDarkModde().subscribe(props => this.asDarkMode = props)
  }
}
