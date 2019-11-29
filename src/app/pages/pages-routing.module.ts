import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';


const routes: Routes = [
  {  path: '', component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: '',
        loadChildren: './shows/shows.module#ShowsModule'
      },
      {
        path: '',
        loadChildren: './contact/contact.module#ContactModule'
      },
      {
        path: '',
        loadChildren: './show-detail/show-detail.module#ShowDetailModule'
      },
      {
        path: '',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: '',
        loadChildren: './search/search.module#SearchModule'
      },
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
