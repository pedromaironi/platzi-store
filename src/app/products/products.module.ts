import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
  imports: [
    ProductsRoutingModule,
    CommonModule
  ],
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  exports: [
    // ProductsComponent,
    // ProductComponent
  ],
  providers: [

  ]
})

export class ProductsModule {}
