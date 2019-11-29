import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {Router} from '@angular/router';
import {Show} from '../../models/show';
import {TvMazeApi} from '../../api/tvMazeApi.service';
@Component({
  selector: 'app-show',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
    public allShows: Show[];
    public paging: string;
    public listOrignal: Show[];
    public searchtext: string ;
    constructor(private shows: TvMazeApi, private router: Router) { }

  ngOnInit() {
     this.getAllShows();
  }
  getAllShows() {
  this.shows.getShows().subscribe(data => {
    this.allShows = data;
    this.allShows = this.listOrignal = this.allShows.length && data;
  });
  }

  search(search: string): void {
    this.allShows = _.filter(this.listOrignal, (obj: any) => {
      if (search) {
        return _.startsWith(_.lowerCase(obj.name), _.lowerCase(search));
      }
      return true;
    });
  }
  searchShow(val) {
    window.localStorage.setItem('query', JSON.stringify(val));
    this.router.navigateByUrl('search');

  }
}
