import { Component, OnInit, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import AppConsts from '../Constants/AppConsts';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public searchBarPlaceHolder: string = AppConsts.SEARCH_BAR_PLACEHOLDER;

  @ViewChild('searchInput') searchInput!: ElementRef;
  @Output() searchValue = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  search(val: any): void{
    this.searchInput.nativeElement.value = '';
    this.searchValue.emit(val);
  }
}
