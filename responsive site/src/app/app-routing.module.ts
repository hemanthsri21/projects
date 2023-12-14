import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'locations',
    component:LocationsComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, MenuComponent,LocationsComponent,BlogComponent, ContactComponent,AboutComponent]

