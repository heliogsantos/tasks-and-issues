import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateDirectoryComponent } from './components/create-directory/create-directory.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './components/menu/services/menu';
import { TaskListComponent } from './components/task-list/task-list.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderModalComponent } from './components/header-modal/header-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TaskListComponent,
    CreateDirectoryComponent,
    LoginComponent,
    HeaderModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
