import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  public currentUser = [];
  public isButtonVisible = true;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  ngAfterContentChecked() {
    this.currentUser = window.localStorage.getItem('user') && JSON.parse(window.localStorage.getItem('user'));
  }
  logoutUser() {
    window.localStorage.clear();
    this.isButtonVisible = false;
    this.router.navigateByUrl('home');
  }
  loginpage() {
    this.router.navigate(['login']);
  }
  contact() {
    this.router.navigate(['contact']);
  }
  home() {
    this.router.navigate(['home']);
  }
  shows() {
    this.router.navigate(['shows']);
  }
}
