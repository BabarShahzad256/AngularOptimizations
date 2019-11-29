import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ShowDetailService} from '../../shared/services/showDetail.service';
import {ShowDetail} from '../../models/showdetails';


@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  public selectedShow: ShowDetail[];
  public showContent = false;
  public show_id: number;
  constructor(private route: ActivatedRoute, private showDetail: ShowDetailService) { }

  ngOnInit() {
    this.getParam();
  }

  getParam() {
    this.route.params.subscribe(params => {
      this.getShowDetails(params['id']);
      if (params['id']) {
        this.show_id = params['id'];
      }
    });
  }
  getShowDetails(id: number): void {
    if (id) {
      this.showDetail.getShowDetails(id).subscribe(data => {
        this.selectedShow = data;
        this.showContent = true;
      });
    }
  }
}
