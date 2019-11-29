import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {ApiService} from './api.service';
import {environment} from '../../environments/environment';

@Injectable()
export class LoginApi {
  public user: any = [];
     public baseUrl: string = environment.LOGIN_URL;
    constructor(private _rest: ApiService) {
    }
  public login(param) {
    // use for login user api another server
    const endPointUrl = '/widget/auth/login';
    const url = this.baseUrl + endPointUrl;
    return this._rest.post(url, param).do((data: any) => {
      this.user = data.data;
      if (this.user != null) {
        window.localStorage.setItem('user', JSON.stringify(this.user.profile));
        window.localStorage.setItem('token', JSON.stringify(this.user.token));
      }
    });
  }
}
