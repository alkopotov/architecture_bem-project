import { Component } from '@angular/core';

interface KeyFact {
  id: number,
  title: string,
  description: string,
  icon?: string
}
@Component({
  selector: 'app-about-banner',
  standalone: true,
  imports: [],
  templateUrl: './about-banner.component.html',
  styleUrl: './about-banner.component.css'
})
export class AboutBannerComponent {

  public keyFacts: KeyFact[] = [
    {
      id: 1,
      title: '10 years',
      description: 'on the market',
      icon: 'assets/images/fact-1.png'
    },
    {
      id: 2,
      title: '1 000+',
      description: 'happy customers',
      icon: 'assets/images/fact-2.png'
    },
    {
      id: 3,
      title: '200+',
      description: 'products in stock',
      icon: 'assets/images/fact-3.png'
    },
    {
      id: 4,
      title: '50+',
      description: 'orders per day',
      icon: 'assets/images/fact-4.png'
    }
  ];

}
