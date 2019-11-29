import { Component, OnInit } from '@angular/core';
import {HomeRestService} from '../../shared/services/homeRest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public seasonsShows: object = [];
    constructor(private shows: HomeRestService) { }

  ngOnInit() {
     this.getAllShows();
  }
  getAllShows() {
  this.shows.getShowsSeasons().subscribe(data => {
    this.seasonsShows = data;
  });
  }
}
