import { ChangeContext, Options, PointerType } from '@angular-slider/ngx-slider';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AppConsts from '../Constants/AppConsts';
import { AppServiceService } from '../services/app-service.service';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-category-and-item-section',
  templateUrl: './category-and-item-section.component.html',
  styleUrls: ['./category-and-item-section.component.css']
})
export class CategoryAndItemSectionComponent implements OnInit {
  categoryData: any[] = new Array();
  categoryFor: any;
  minValue: number;
  changeValue;
  options: Options = {
    floor: 0,
    ceil: 0,
  };
  logText: string = '';
  categoryItemData: any;
  categoryItems: any[] = new Array();
  categoryItems2: any[] = new Array();
  urlId: any = null;

  constructor(private route: ActivatedRoute, 
    private service: BackendApiService,
    private appService: AppServiceService) { 
   
    }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.urlId = url[1].path;
      // get left side categories
      this.service.getCategory().subscribe((data: any[]) => {
        data.forEach((value: any, key: any) => {
          if (this.urlId  === value.for) {
            this.categoryFor = this.urlId;
            this.categoryData = value.items
          }
        });
      });

      // get right side category items
      // this.categoryItems2 = [];
      this.categoryItems = [];
      this.service.getcategoryItem().subscribe((data: any[]) => {
        data.forEach((value: any, key: any) => {
          if (this.urlId === value.for) {
            this.categoryItemData = data[key];
            this.categoryItems2 = this.categoryItemData.items;
            this.categoryItems = this.categoryItemData.items;
            this.changeValue = this.categoryItems[0].priceAfterDiscount;
            this.minValue = this.categoryItems[0].priceAfterDiscount;
            this.options = {
              floor: this.categoryItems[0].priceAfterDiscount,
              ceil: this.categoryItems[this.categoryItems.length - 1].priceAfterDiscount,
            };
          }
        });
      }); 

      this.categoryItems = this.categoryItems2;
    });
  }

  onUserChangeFilter(changeContext: ChangeContext): void {
    this.changeValue = changeContext.value;    
    let cItems = this.categoryItems2;
    this.categoryItems = [];
    for (let i = 0; i < cItems.length; i++) {
      if(this.changeValue <= cItems[i].priceAfterDiscount){
        this.categoryItems.push(cItems[i]);
      }
    }
  }

  addToCart(id: any){
    console.log("inside method addToCart and id: ", id);
  }

  setFavourite(id: any){
    console.log("inside method setFavourite and id: ", id);
  }
}
