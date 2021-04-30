import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ghx-lightbox';

  items = [];

  constructor() {
    this.items = [
      {
        src: '../assets/img/picure-1.jpeg',
        caption: 'Caption 1'
      },
      {
        src: '../assets/img/picure-2.jpeg',
        caption: 'Caption 2'
      },
      {
        src: '../assets/img/picure-3.jpeg',
        caption: 'Caption 3'
      },
      {
        src: '../assets/img/picure-4.jpeg',
        caption: 'Caption 4'
      },
      {
        src: '../assets/img/picure-5.jpeg',
        caption: 'Caption 5'
      }
    ];
  }

  ngOnInit() {

  }
}
