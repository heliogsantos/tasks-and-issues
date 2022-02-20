import { Component } from '@angular/core';

import { MenuService } from '../menu/services/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private menuService: MenuService) { }

  openMenu = () => {
    const showMenu = true
    this.menuService.setMenuToggle(showMenu)
  }

}
