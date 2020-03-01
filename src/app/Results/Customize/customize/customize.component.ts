import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit {
  selectorTypeCost = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCommuteSettings() {
    this.selectorTypeCost = 0;
  }

  onSelectCarSettings() {
    this.selectorTypeCost = 1;
  }

  onSelectFuelSettings() {
    this.selectorTypeCost = 2;
  }

  onSelectFinancialSettings() {
    this.selectorTypeCost = 3;
  }


}
