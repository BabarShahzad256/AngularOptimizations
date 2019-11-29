import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowDetailComponent} from './show-detail.component';
import {ShowDetailRoutingModule} from './show-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShowDetailRoutingModule
  ],
  declarations: [ShowDetailComponent]
})
export class ShowDetailModule { }
