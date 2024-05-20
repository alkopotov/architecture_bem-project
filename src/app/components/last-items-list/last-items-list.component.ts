import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-last-items-list',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './last-items-list.component.html',
  styleUrl: './last-items-list.component.css'
})
export class LastItemsListComponent {

  @Input() productList: any[] = [];

  public cartService = inject(CartService);

  public handleAddToCart(event: Event, id: string): void {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.addToCart(id, 1);
    this.cartService.updateNumberOfProducts();
  }

}
