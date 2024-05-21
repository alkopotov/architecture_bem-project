import { Component, OnInit, inject } from '@angular/core';
import { BestOffersListComponent } from '../../components/best-offers-list/best-offers-list.component';
import { AboutBannerComponent } from '../../components/about-banner/about-banner.component';
import { ProductListService } from '../../services/product-list.service';
import { BannerPromoComponent } from '../../components/banner-promo/banner-promo.component';
import { LastItemsListComponent } from '../../components/last-items-list/last-items-list.component';
import { BannerAdvantagesComponent } from '../../components/banner-advantages/banner-advantages.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BestOffersListComponent, AboutBannerComponent, BannerPromoComponent, LastItemsListComponent, BannerAdvantagesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  public productListService = inject(ProductListService);

  ngOnInit(): void {
      this.productListService.fetchProductList()
  }
}
