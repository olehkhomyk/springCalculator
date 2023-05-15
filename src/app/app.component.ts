import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  kgValue: number;

  kgValue1: number;
  kgValue2: number;
  kgValue3: number;
  kgValue4: number;
  kgValue5: number;

  maxCategoryValue: 0;

  chartData: any[] = [0];

  constructor() {
  }

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
