import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-savings',
  templateUrl: './total-savings.component.html',
  styleUrls: ['./total-savings.component.css']
})
export class TotalSavingsComponent implements OnInit {
  selectorTypeCost = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectSum() {
    this.selectorTypeCost = 0;
  }

  onSelectDepreciation() {
    this.selectorTypeCost = 1;
  }

  onSelectFuel() {
    this.selectorTypeCost = 2;
  }

  onSelectMaintenance() {
    this.selectorTypeCost = 3;
  }

  onSelectInsurance() {
    this.selectorTypeCost = 4;
  }




}
