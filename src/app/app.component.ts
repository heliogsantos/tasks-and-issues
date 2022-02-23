import { Component, OnInit } from '@angular/core';

import { MenuService } from './components/menu/services/menu';
import { DarkModeService } from './services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private menuService: MenuService,
    private darkMode: DarkModeService
  ) {}

  asDarkMode = false

  closeMenu = (e: any) => {
    const closeMenu = false
    this.menuService.setMenuToggle(closeMenu)
  }

  ngOnInit(): void {
    this.darkMode.getDarkModde().subscribe(props => this.asDarkMode = props)
  }
}
