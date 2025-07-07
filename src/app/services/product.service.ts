import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface, RecommendedProduct } from '../models';
@Injectable({
  providedIn: 'root'
})
export class productService {
  private apiUrl = 'http://localhost:3000/api/products';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.apiUrl);
  }
   getRecommendedProducts(): Observable<RecommendedProduct[]> {
    return this.http.get<RecommendedProduct[]>(`${this.apiUrl}/recommended`);
  }
}
