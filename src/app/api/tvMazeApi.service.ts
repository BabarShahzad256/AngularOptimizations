import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {ApiService} from './api.service';
import {environment} from '../../environments/environment';
import {Show} from '../models/show';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TvMazeApi {
    public baseUrl: string = environment.BASE_URL;
    constructor(private _rest: ApiService) {
    }
  public getShows(): Observable<Show[]> {
    const endPointUrl = '/shows';
    const url = this.baseUrl + endPointUrl;
    return this._rest.getOpenApi<Show[]>(url);
  }
}
