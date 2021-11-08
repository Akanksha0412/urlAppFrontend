import { Component, OnInit } from '@angular/core';
import { urlData } from '../modal';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalLinks=0;
  totalClicks=0;
  
  constructor(private urlService:UrlServiceService) { }

  ngOnInit(): void {
    this.getTotal();
  }

  getTotal(){
    this.urlService.getAll().subscribe((data)=>{
      data.forEach((temp)=>{
        this.totalLinks +=1;
        this.totalClicks += temp.count;
      })
    })
  }
}
