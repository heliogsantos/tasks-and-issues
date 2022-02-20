import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }


  showMenu = false

  closeNaveBar = () => {
    this.showMenu = !this.showMenu
    this.menuService.setMenuToggle(this.showMenu)
  }

  ngOnInit(): void {
    this.menuService.getMenuToggle().subscribe(props => {
      this.showMenu = props
    })
  }

}
