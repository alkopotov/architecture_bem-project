import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-offers-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './best-offers-list.component.html',
  styleUrl: './best-offers-list.component.css'
})
export class BestOffersListComponent {
  @Input() public productList: any[];

  public roundNumber(number: number): number {
    return Math.round(number);
  }
}
