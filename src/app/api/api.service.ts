import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {
    }
  public post<T>(url: string, param: object = {}): Observable<T> {
    return this.http.post<T>(url , param);
  }
  public getOpenApi<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
