import { Component, ElementRef, OnInit } from '@angular/core';

import { AppServiceService } from '../services/app-service.service';
import { BackendApiService } from '../services/backend-api.service';
import { map, take } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home-page-deals',
  templateUrl: './home-page-deals.component.html',
  styleUrls: ['./home-page-deals.component.css']
})
export class HomePageDealsComponent implements OnInit {
  categoryItemData: any[] = new Array();
  countDownTimer: string;

  constructor(private service: BackendApiService,
    private appService: AppServiceService) { }

  ngOnInit() {
    this.service.getHomePageDeals().subscribe((data: any[]) => {
      this.categoryItemData = data;

      // run dealTimeInSeconds in server.
      // as dealTimeInSeconds decay in server, it will decay here too.
      // no extra manipulation required than.
      const dealTimeInSeconds = this.categoryItemData[0].dealTimeInSeconds 
      let timer = interval(1000).pipe(
        take(dealTimeInSeconds),
        map(x => dealTimeInSeconds - x)
      );
      timer.subscribe(timeLeft => {
        timeLeft = Number(timeLeft);
        let h = Math.floor(timeLeft / 3600);
        let m = Math.floor(timeLeft % 3600 / 60);
        let s = Math.floor(timeLeft % 3600 % 60);
        this.countDownTimer = "" + h + ":" + m + ":" + s;
      });
  
    });
  }

}
