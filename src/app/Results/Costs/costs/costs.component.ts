import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})
export class CostsComponent implements OnInit {
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
