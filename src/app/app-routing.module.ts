import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import {RouterModule, Routes} from '@angular/router';
import { AddStuffComponent } from './menu/add-stuff/add-stuff.component';
import { AboutUsComponent } from './menu/about-us/about-us.component';
import { StuffListComponent } from './menu/stuff-list/stuff-list.component';
import { MenuComponent } from './menu/menu.component';

// const routes: Routes = [
//   {path: "", redirectTo: '/menu/', pathMatch: 'full'},
//   {path: "stuff", component: StuffListComponent},
//   {path: "addStuff", component: AddStuffComponent},
//   {path: "aboutUs", component: AboutUsComponent}
// ];

const routes: Routes = [
  {path: "", redirectTo: '/menu', pathMatch: 'full'},
  {path: "menu", component: MenuComponent,
  children: [
    {path: "", redirectTo: 'stuff', pathMatch: 'full'},
    {path: "stuff", component: StuffListComponent},
    {path: "addStuff", component: AddStuffComponent},
    {path: "aboutUs", component: AboutUsComponent}
]}];

@NgModule({
  imports: [RouterModule. forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
