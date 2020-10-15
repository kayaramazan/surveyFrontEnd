import { Component, OnInit } from '@angular/core'; 
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js'; 
import { Label } from 'ng2-charts';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-user-results',
  templateUrl: './list-user-results.component.html',
  styleUrls: ['./list-user-results.component.css']
})
export class ListUserResultsComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true; 
  results :any[]=[]
  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Doldurulan Soru Adedi' },
    { data: [], label: 'Alinan Puan' }
  ];

  constructor(private api:ApiService,private router:Router) {
     
    api.getTotalResult().subscribe((item:any[])=>{
     item.forEach(element => {
       this.barChartLabels.push(element.username)
       this.barChartData[0].data.push(element.qCount)
       this.barChartData[1].data.push(element.score)
     });
     this.results=item 
    })
    
   }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartLabels = []
    this.barChartData = [
      { data: [], label: 'Doldurulan Soru Adedi' },
      { data: [], label: 'Alinan Puan' }
    ];
    // Only Change 3 values
    this.api.getTotalResult().subscribe((item:any[])=>{
      item.forEach(element => {
        this.barChartLabels.push(element.username)
        this.barChartData[0].data.push(element.qCount)
        this.barChartData[1].data.push(element.score)
      });
     })
  }
  cevaplariGor(id)
  {
    console.log(id)
  }
}