
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// import { ProductsComponent } from './products/products.component';
// import { ContactComponent} from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from "./products/components/product-detail/product-detail.component";
import { LayoutComponent } from "./layout/layout.component";

import { AdminGuard } from "./admin.guard";

const Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {path: '', pathMatch: 'full',redirectTo: 'home',},
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      { path: 'products', canActive: [AdminGuard], loadChildren: () => import('./products/products.module').then( r => r.ProductsModule) },
      { path: 'contact', canActive: [AdminGuard], loadChildren: ()=> import('./contact/contact.module').then(c => c.ContactModule)},
      { path: 'demo', component: DemoComponent },
      // { path: 'products/:id', component: ProductDetailComponent },
      { path: '**', component: PageNotFoundComponent  },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
