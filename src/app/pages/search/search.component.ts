import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailService} from '../../shared/services/showDetail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchShows: object = [];
  public searchQuery: any = [];
  public result: string;
  public paging: string;
  constructor(private route: ActivatedRoute, private showDetail: ShowDetailService) { }

  ngOnInit() {
    this.getShowDetails();
  }
  getShowDetails() {
    this.searchQuery = window.localStorage.getItem('query') && JSON.parse(window.localStorage.getItem('query'));
    this.result = this.searchQuery.search;
    if (this.searchQuery != null) {
      this.showDetail.searchShow(this.result).subscribe(data => {
        this.searchShows = data;
      });
    }
  }
}
