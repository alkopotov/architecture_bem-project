import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { BASE_URL } from './product-list.service';
// import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http: HttpClient) { 
    
  }

  public storedProductIds: string[] = Object.keys(localStorage) as string[] || Object.keys(localStorage);

  public numberOfProducts: number = this.storedProductIds.length;

  public get storedIds(): string[] {
    return Object.keys(localStorage) as string[];
  }


  public cartList: any[] = []

  public getNumberOfProducts (): number {
    return Object.keys(localStorage).length;
  }

  public updateNumberOfProducts (): void {
    this.numberOfProducts = Object.keys(localStorage).length;
  }
  

  public deleteProduct (id: string): void {
    localStorage.removeItem(id);
  }

  public addToCart(id: string, amount: number): void {
     if (localStorage.getItem(id) === undefined) {
      localStorage.setItem(id, amount.toString());
     } else {
      localStorage.setItem(id, (localStorage.getItem(id) ?? 0 + amount).toString());
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
      localStorage.setItem(id, (+product.numberInCart + amount).toString());
      this.cartList.map((product: any) => {
        if (product.id === id) {
          product.numberInCart = +product.numberInCart + amount;
        }
      })
    }
}


  public getCartList(): void {
    let res: any[] = [];
    if (this.storedIds.length > 0) {
      this.storedIds.forEach((id: string) => {
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
