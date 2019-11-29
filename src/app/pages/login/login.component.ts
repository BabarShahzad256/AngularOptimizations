import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginApi} from '../../api/loginApi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: object = [];
  public errors: string ;
  constructor(private auth: LoginApi, private router: Router) {

  }

  ngOnInit() {
  }
  customerLogin(val) {
    const param: any  = {};
    param.secret = '6b6800945da21563ecac2fd4ee69cc0124cc9ec2';
    param.email = val.username;
    param.password = val.password;
    param.business_id = '3';
    this.auth.login(param).subscribe(data => {
        this.user = data;
        this.router.navigateByUrl('shows');
      }, (error: any) => {
        this.errors = error.error.message.description;
      });

  }
}
