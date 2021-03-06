import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  exports:  [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
