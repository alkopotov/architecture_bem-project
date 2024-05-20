import { Component, OnInit, inject } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-elem',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-elem.component.html',
  styleUrl: './footer-elem.component.css'
})
export class FooterElemComponent implements OnInit {
  
  public productList = inject(ProductListService);
  
  public logoSrc: string = 'assets/icons/shop_logo.svg';

  public capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  public ngOnInit(): void {
    this.productList.fetchProductList()
  }
}
