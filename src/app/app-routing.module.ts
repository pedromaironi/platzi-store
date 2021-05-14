
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent} from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**', component: PageNotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
