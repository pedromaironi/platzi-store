import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    //! Constructor
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params.id);
      const idProduct = params.id;
      this.product = this.productsService.getProduct(idProduct);
      console.log(this.product);
    });
  }

}
