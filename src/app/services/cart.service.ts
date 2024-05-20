import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { BASE_URL } from './product-list.service';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public storage: StorageService, private http: HttpClient) { 
    
  }

  public storedProductIds: string[] = this.storage.keys();

  public numberOfProducts: number = this.storedProductIds.length;

  public get storedIds(): string[] {
    return this.storage.keys();
  }


  public cartList: any[] = []

  public getNumberOfProducts (): number {
    return this.storage.keys().length;
  }

  public updateNumberOfProducts (): void {
    this.numberOfProducts = this.storage.keys().length;
  }
  

  public deleteProduct (id: string): void {
    this.storage.remove(id);
  }

  public addToCart(id: string, amount: number): void {
     if (this.storage.get(id) === undefined) {
      this.storage.set(id, amount.toString());
     } else {
      this.storage.set(id, (this.storage.get(id) ?? 0 + amount).toString());
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
      this.storage.set(id, (+product.numberInCart + amount).toString());
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
          let numberInCart = this.storage.get(id) || 0;
          data.numberInCart = +numberInCart > +data.stock ? +data.stock : +numberInCart;
          this.storage.set(id, data.numberInCart);
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
