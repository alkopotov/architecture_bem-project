import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {

  public cartService = inject(CartService)  


  public handleRemoveFromCart(event: Event, id: string): void {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.deleteProduct(id);
    this.cartService.updateNumberOfProducts();
    this.cartService.getCartList();
  }
  ngOnInit(): void {
    this.cartService.getCartList();
  }

}
