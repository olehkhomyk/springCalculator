import { AfterViewInit, Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.scss']
})
export class MyLineChartComponent implements OnChanges {
  @Input() data: any;
  @Output() export: any;

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgb(0,56,151)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['0mm', '10mm', '20mm', '30mm', '40mm', '50mm']
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y:
        {
          position: 'left',
        },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    }
  };

  public lineChartType: ChartType = 'line';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.lineChartData.datasets[0].data = changes['data'].currentValue;
      this.chart?.update();
    }
  }

  downloadCanvas(event: any) {
    // get the `<a>` element from click event
    var anchor = event.target;
    // get the canvas, I'm getting it by tag name, you can do by id
    // and set the href of the anchor to the canvas dataUrl
    anchor.href = document.getElementsByTagName('canvas')[0].toDataURL();
    // set the anchors 'download' attibute (name of the file to be downloaded)
    anchor.download = "test.png";
  }
}
