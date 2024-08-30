import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BASE_URL } from './product-list.service';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { 
    
  }

  public get storedProductIds(): string[] {
    if (this.platformId === 'browser') {
      return Object.keys(localStorage) as string[];
    } else {
      return [];
    }
  }


  public numberOfProducts: number = this.storedProductIds.length;

  public storedIds(): string[] {
    if (this.platformId === 'browser') {
      return Object.keys(localStorage) as string[];
    } else {
      return [];
    }
  }


  public cartList: any[] = []

  public getNumberOfProducts (): number {
    if(this.platformId === 'browser') {
      return Object.keys(localStorage).length;
    } else {
      return 0;
    }
   
  }

  public updateNumberOfProducts (): void {
    if (this.platformId === 'browser') {
      this.numberOfProducts = Object.keys(localStorage).length;
    }
  }
  

  public deleteProduct (id: string): void { 
    if (this.platformId === 'browser') {
      localStorage.removeItem(id);
    }
  }

  public addToCart(id: string, amount: number): void {
     if (localStorage.getItem(id) === undefined) {
      if(this.platformId === 'browser') {
        localStorage.setItem(id, amount.toString());
      }
     } else {
      if(this.platformId === 'browser') {
        localStorage.setItem(id, (localStorage.getItem(id) ?? 0 + amount).toString());
      }
     }
  }

  public changeAmount(id: string, amount: number): void {
    let product = this.cartList.find((product: any) => product.id === id);
    if (+product.numberInCart + amount === 0) {
      this.deleteProduct(id);
      this.updateNumberOfProducts();
      this.getCartList();
    } else  if (+product.numberInCart + amount > product.stock) {
      return
    } else {
      if(this.platformId === 'browser') {
        localStorage.setItem(id, (+product.numberInCart + amount).toString());
        this.cartList.map((product: any) => {
          if (product.id === id) {
            product.numberInCart = +product.numberInCart + amount;
          }
        })
      }
    }
}


  public getCartList(): void {
    let res: any[] = [];
    if (this.storedIds().length > 0) {
      this.storedIds().forEach((id: string) => {
        this.http.get(BASE_URL + '/products/' + id).subscribe((data: any) => {
          let numberInCart = localStorage.getItem(id) || 0;
          data.numberInCart = +numberInCart > +data.stock ? +data.stock : +numberInCart;
          localStorage.setItem(id, data.numberInCart);
          res.push(data);
        })
      })
    }
    this.cartList = res;
  }

  public get numberOfItems (): number {
    let sum = 0;
    this.cartList.forEach((product: any) => {
      sum += product.numberInCart;
    })
    return sum;
  }

  public get sumOrder (): number {
    let sum = 0;
    this.cartList.forEach((product: any) => {
      sum += product.price * (1 - product.discountPercentage / 100) * product.numberInCart;
    })
    return sum;
  }
}
