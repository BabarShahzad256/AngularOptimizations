import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowDetailComponent} from './show-detail.component';


const routes: Routes = [
  {  path: 'show-detail/:id', component: ShowDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowDetailRoutingModule { }
