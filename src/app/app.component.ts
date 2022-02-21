import { Component } from '@angular/core';

import { MenuService } from './components/menu/services/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private menuService: MenuService) {}

  closeMenu = (e: any) => {
    const closeMenu = false
    this.menuService.setMenuToggle(closeMenu)
  }
}
