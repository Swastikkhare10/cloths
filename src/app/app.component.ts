

import { Component } from '@angular/core';
import AppConsts from './Constants/AppConsts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = AppConsts.BRAND_NAME + AppConsts.TRADEMARK;
}
