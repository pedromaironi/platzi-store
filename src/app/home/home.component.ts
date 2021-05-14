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
    /*
    ! Un método de devolución de llamada que se invoca inmediatamente
    ! después de que Angular haya completado la inicialización de la vista
    ! de un componente. Se invoca solo una vez cuando se crea una instancia de la vista.
    */
  }
}
