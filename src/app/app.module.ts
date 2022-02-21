import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './components/menu/services/menu';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
