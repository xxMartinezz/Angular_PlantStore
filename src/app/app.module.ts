import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { StuffListComponent } from './menu/stuff-list/stuff-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AddStuffComponent } from './menu/add-stuff/add-stuff.component';
import { AboutUsComponent } from './menu/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainContentComponent,
    StuffListComponent,
    AddStuffComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
