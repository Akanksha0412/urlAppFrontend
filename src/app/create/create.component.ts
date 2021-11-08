import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() longUrl:string="";
  shortUrl:string="";
  urldata ={
    "longurl":"",
    "shorturl":"",
    "count":0
  };
  
  constructor(private urlService:UrlServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  saveData(long:string,short:string){
    console.log(long);
    console.log(short);
    this.urldata={
      "longurl":long,
      "shorturl":short,
      "count":0
    };
    console.log(this.urldata);
    this.urlService.saveUrl(this.urldata).subscribe(()=>{
      alert("URL Saved");
    });
  }

  generate(){
    var characters=this.longUrl.slice(8);
    var charactersLength=characters.length;

    for(var i=0;i<5;i++)
    {
      this.shortUrl += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    this.saveData(this.longUrl,this.shortUrl)
  }

}
