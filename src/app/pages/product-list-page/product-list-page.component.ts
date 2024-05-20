import { Component, OnInit, inject } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.css'
})
export class ProductListPageComponent implements OnInit {

  public productListService = inject(ProductListService);

  ngOnInit(): void {
      this.productListService.fetchProductList()
  }

  public capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
}
