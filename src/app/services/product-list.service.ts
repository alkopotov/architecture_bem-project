import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const BASE_URL: string = 'https://dummyjson.com'

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  constructor(private http: HttpClient) { }

  

  public productList: any[] = [];
  public productItem: any = {};
  public displayedProducts: any[] = [];


  public fetchProductList(): void {
    this.http.get(BASE_URL + '/products?limit=100').subscribe((data: any) => {
      this.productList = data.products;
    })
  }

  public getBestOffers(): any[] {
    const discountedProducts: any[] = this.productList.sort((a, b) => b.discountPercentage - a.discountPercentage);
    return discountedProducts.slice(0, 5);
  }


  public get ProductCategories(): any[] {
    const categories = new Set<string>(this.productList.map((product: any) => product.category));
    return Array.from(categories).sort();
  }

  public getProductListByCategory(category: string): any[] {
    return this.productList.filter((product: any) => product.category === category);
  }
  
  public getProductItem(id: number): any {
    this.productItem = {};
    this.http.get(BASE_URL + '/products/' + id).subscribe((data: any) => {
        this.productItem = data;
      }
    )
  }

  public searchProducts(search: string): void {
    this.http.get(BASE_URL + '/products?limit=100').subscribe((data: any) => {
      
      this.displayedProducts = data.products.filter((product: any) => product.title?.toLowerCase().includes(search.toLowerCase()));
    })
  }

  public get minSaldo(): any[] {
    return [...this.productList].filter((product: any) => product.stock > 0).sort((a, b) => a.stock - b.stock).slice(0, 6);
  }
}
