import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeRestService} from './shared/services/homeRest.service';
import {ShowDetailService} from './shared/services/showDetail.service';
import {APP_BASE_HREF} from '@angular/common';
import {AuthGuard} from './authguard/auth.guard';
import {LoginApi} from './api/loginApi.service';
import {ApiService} from './api/api.service';
import {TvMazeApi} from './api/tvMazeApi.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },
    ApiService,
    LoginApi,
    TvMazeApi,
    HomeRestService,
    ShowDetailService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
