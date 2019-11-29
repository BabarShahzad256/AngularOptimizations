import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowsComponent} from './shows.component';
import {AuthGuard} from '../../authguard/auth.guard';


const routes: Routes = [
  { path: 'shows', component: ShowsComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
