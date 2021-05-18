import { Component, } from '@angular/core';
import {
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';

import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent implements DoCheck, OnInit, OnDestroy {
  constructor() {
    console.log("constructor");
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("onChanged");
  //   console.log(changes);
  // }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("onInit");

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("DoChefck");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("OnDestroy");
  }
  @Input() products: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart( name: string) {
    console.log(` Añadir ${name} a el carrito`);
    this.productClicked.emit('Añadido al carrito' + this.products.id);
  }
}
