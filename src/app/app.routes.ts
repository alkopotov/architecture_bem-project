import { Routes } from '@angular/router';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { OutletListPageComponent } from './pages/outlet-list-page/outlet-list-page.component';
import { ProductItemPageComponent } from './pages/product-item-page/product-item-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CategoryListPageComponent } from './pages/category-list-page/category-list-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'products',
    component: ProductListPageComponent
  },
  {
    path: 'outlets',
    component: OutletListPageComponent
  },
  {
    path: 'products/:id',
    component: ProductItemPageComponent
  },
  {
    path: 'categories/:id',
    component: CategoryListPageComponent
  },
  {
    path: 'cart',
    component: CartPageComponent  
  },
  {
    path: 'profile',
    component: ProfilePageComponent
  },
  {
    path: 'search/:query',
    component: SearchPageComponent
  }
];
