import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ApiService} from '../../api/api.service';
import {environment} from '../../../environments/environment';
import {ShowDetail} from '../../models/showdetails';
import {Show} from '../../models/show';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ShowDetailService {
  public baseUrl: string = environment.BASE_URL;
  constructor (private apiService: ApiService) {

  }
  public getShowDetails(id: number): Observable<ShowDetail[]> {
    const endPointUrl = '/shows/' + id;
    const url = this.baseUrl + endPointUrl;
    return this.apiService.getOpenApi<ShowDetail[]>(url);
  }
  public searchShow(query: string): Observable<Show[]> {
    const endPointUrl = '/search/shows?q=' + query;
    const url = this.baseUrl + endPointUrl;
    return this.apiService.getOpenApi<Show[]>(url);
  }
}
