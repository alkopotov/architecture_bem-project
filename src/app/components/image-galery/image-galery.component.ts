import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-galery',
  standalone: true,
  imports: [],
  templateUrl: './image-galery.component.html',
  styleUrl: './image-galery.component.css'
})
export class ImageGaleryComponent {

  @Input() images: string[] = [];

  public selectedIndex: number = 0;
  
  public changeImage(ind: number): void {
    this.selectedIndex = ind;
  }
}
