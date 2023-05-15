import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  kgValue1: number | any;
  kgValue2: number | any;
  kgValue3: number | any;
  kgValue4: number | any;
  kgValue5: number | any;

  chartData: any[] = [0];

  constructor() {
  }

  reset(): void {
    this.chartData = [0];
    this.kgValue1 = null;
    this.kgValue2 = null;
    this.kgValue3 = null;
    this.kgValue4 = null;
    this.kgValue5 = null;
  }

  // (KG / MM) = kg/mm | kg/mm * 9.8 = nm/mm

  isInputDisabled(value: any): boolean {
    return typeof(value) === 'object' || isNaN(value);
  }

  addRate1(): void {
    this.chartData = [0, this.kgValue1];
  }

  addRate2(): void {
    this.chartData = [0, this.kgValue1, this.kgValue2];
  }

  addRate3(): void {
    this.chartData = [0, this.kgValue1, this.kgValue2, this.kgValue3];
  }

  addRate4(): void {
    this.chartData = [0, this.kgValue1, this.kgValue2, this.kgValue3, this.kgValue4];
  }

  addRate5(): void {
    this.chartData = [0, this.kgValue1, this.kgValue2, this.kgValue3, this.kgValue4, this.kgValue5];
  }
}
