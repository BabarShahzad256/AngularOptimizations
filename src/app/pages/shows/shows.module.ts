import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {ShowsComponent} from './shows.component';
import {ShowsRoutingModule} from './shows-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShowsRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [ShowsComponent]
})
export class ShowsModule { }
