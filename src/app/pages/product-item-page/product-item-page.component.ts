import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { ActivatedRoute } from '@angular/router';
import { ImageGaleryComponent } from '../../components/image-galery/image-galery.component';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item-page',
  standalone: true,
  imports: [ImageGaleryComponent, CurrencyPipe, DecimalPipe],
  templateUrl: './product-item-page.component.html',
  styleUrl: './product-item-page.component.css'
})
export class ProductItemPageComponent implements OnInit {
  constructor(public productListService: ProductListService, public routes: ActivatedRoute, public cartService: CartService) { }


  public handleAddTocart (): void {
    this.cartService.addToCart(this.routes.snapshot.params['id'], 1);
    this.cartService.updateNumberOfProducts();
  }

  ngOnInit(): void {
    this.productListService.getProductItem(this.routes.snapshot.params['id'])
  }
}
