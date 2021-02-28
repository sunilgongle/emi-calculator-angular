import { Component, OnInit } from '@angular/core';
import {CopyContentService} from '../shared/copy-content.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor( public copyContent: CopyContentService) {}

  homePageCopy:any;
  ngOnInit(): void {
    this.homePageCopy = this.copyContent.homePage;
  }
}
