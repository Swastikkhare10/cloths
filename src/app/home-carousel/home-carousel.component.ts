import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {
  carousalData: any[] = [];
  constructor(private service: BackendApiService) { }

  ngOnInit(): void {
    this.service.getCarousal().subscribe((data: any) => {
      this.carousalData = data;
    });
  }

}
