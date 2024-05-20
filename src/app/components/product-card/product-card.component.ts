import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  constructor(public cartService: CartService) { }
  @Input() product: any;
  
  public getDiscountedPrice(): number {
    return this.product.price - (this.product.price * this.product.discountPercentage / 100);
  }

  
  public handleAddToCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.addToCart(this.product.id, 1);
    this.cartService.updateNumberOfProducts();
  }
}
