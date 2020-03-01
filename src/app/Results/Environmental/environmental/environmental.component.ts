import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environmental',
  templateUrl: './environmental.component.html',
  styleUrls: ['./environmental.component.css']
})
export class EnvironmentalComponent implements OnInit {
  selectorPage = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectPurchasePrice() {
    this.selectorPage = 0;
  }

  onSelectTotalSavings() {
    this.selectorPage = 1;
  }
}
