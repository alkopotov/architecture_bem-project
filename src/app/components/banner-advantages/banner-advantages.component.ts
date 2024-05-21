import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-banner-advantages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner-advantages.component.html',
  styleUrl: './banner-advantages.component.css'
})
export class BannerAdvantagesComponent {


  public advantages: any[] = [
    {
      title: 'Sales & Presents',
      text: 'Continuous promotions, bonuses and discounts. Buy appliances at the best prices',
      image: 'assets/images/banner-advantages/img_1.png',
      link: '/products',
      topColor: '#FE94A6',
      bottomColor: '#F2F2F2',
    },
    {
      title: 'Fast delivery',
      text: 'Free delivery within 3 hours in Moscow, fast delivery throughout Russia, pickup also available',
      image: 'assets/images/banner-advantages/img_2.png',
      link: '/outlets',
      topColor: '#E685FF',
      bottomColor: '#F2F2F2',

    },
    {
      title: 'Convenient an secure payment',
      text: 'Cash or card on delivery or pickup, online payment or credit',
      image: 'assets/images/banner-advantages/img_3.png',
      link: '/outlets',
      topColor: '#7DE9FF',
      bottomColor: '#F2F2F2',
    },
    {
      title: 'Buy in credit',
      text: 'Best credit offers from leading banks, payment in installments is possible ',
      image: 'assets/images/banner-advantages/img_4.png',
      link: '/products',
      topColor: '#FFE685',
      bottomColor: '#F6F6F6',
    },
    {
      title: 'Warranty',
      text: 'All products have a warranty from our store or the manufacturers.',
      image: 'assets/images/banner-advantages/img_5.png',
      link: '/products',
      topColor: '#ADFFC1',
      bottomColor: '#F2F2F2',
    }
  ];
}
