import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  public categoryToCategoryItem:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }

  getCategoryToCategoryItem(): Observable<any> {
    return this.categoryToCategoryItem.asObservable();
  }
  setCategoryToCategoryItem(data: any): any{
    this.categoryToCategoryItem.next(data);
  }
}
