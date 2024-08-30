import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, inject} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';




@Component({
  selector: 'app-header-elem',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, FormsModule, CommonModule],
  templateUrl: './header-elem.component.html',
  styleUrl: './header-elem.component.css'
})
export class HeaderElemComponent {


  constructor() {
    

  }

  public cartService = inject(CartService)


  public logoSrc: string = 'assets/icons/shop_logo.svg';
  public searchQuery: string = '';
}
