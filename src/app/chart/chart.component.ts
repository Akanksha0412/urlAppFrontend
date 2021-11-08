import { Component, OnInit } from '@angular/core';
import { chartData } from '../modal';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  view: [number,number] = [1000, 300];
  fill: Array<chartData>=[];
  temp3: Array<chartData>=[];
  
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Short URL';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Clicks';

  colorScheme = {
    // domain: ['red', 'blue', 'yellow', 'green', 'pink', 'black']
  };


  constructor(private urlService:UrlServiceService) { }

  
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.urlService.getAll().subscribe((data) =>{
      data.sort()
      data.forEach((temp1)=>{
        this.temp3.push({"name":temp1.shorturl, "value":temp1.count})
      })
    })
    this.fill=this.temp3;
    console.log(this.fill);
  }
}
