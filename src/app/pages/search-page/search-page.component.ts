import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from '../../services/product-list.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit {

  constructor(public productListService: ProductListService, private routes: ActivatedRoute) { 
    this.routes.paramMap.subscribe((params) => {
      this.ngOnInit();
    })
  }
  ngOnInit(): void {
    this.productListService.searchProducts(this.routes.snapshot.params['query']);
   }
}
