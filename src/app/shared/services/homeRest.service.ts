import {Injectable} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {environment} from '../../../environments/environment';
import {Show} from '../../models/show';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HomeRestService {
  public baseUrl: string = environment.BASE_URL;

    constructor(private _rest: ApiService) {
    }
    public getShowsSeasons(): Observable<Show[]> {
      const endPointUrl = '/shows/1/seasons';
      const url = this.baseUrl + endPointUrl;
        return this._rest.getOpenApi<Show[]>(url);
    }
}
