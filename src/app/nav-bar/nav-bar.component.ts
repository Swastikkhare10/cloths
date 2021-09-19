
import { Component, OnInit } from '@angular/core';
import AppConsts from '../Constants/AppConsts';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public brandName: string = AppConsts.BRAND_NAME;
  public trademark: string = AppConsts.TRADEMARK;
  navBarMenu: any;

  constructor(private service: BackendApiService) { }

  ngOnInit(): void {
    this.service.getNavBarMenu().subscribe((data: any[]) => {
      this.navBarMenu = data;
    });
  }

  search(val: any): void{
    console.log(val);
  }
}
