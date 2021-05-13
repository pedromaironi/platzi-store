import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mSwiper: Swiper;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.mSwiper = new Swiper('.swiper-container');
  }
}
