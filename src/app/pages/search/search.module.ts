import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchRoutingModule} from './search-routing.module';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
