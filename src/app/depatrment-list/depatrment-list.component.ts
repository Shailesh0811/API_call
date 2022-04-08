import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-depatrment-list',
  templateUrl: './department-list.components.html',
  styles: [
  ]
})
export class DepatrmentListComponent implements OnInit {

  userIP= '';
  type='';
  city='';
  continent_code='';
  continent_name='';
  timezone='';
  country_name='';
  latitude='';
  location=[];
  longitude='';
  region_code='';
  region_name='';
  zip='';
  capital='';
  isp='';

  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    this.loaduserInfo();
  }

  loaduserInfo(){
    this.httpClient.get('https://jsonip.com/')
    //this.userIP=response.ip
    .pipe(
      switchMap((value:any)=>{
        this.userIP= value.ip;
        let url= `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_9j2dDTEPcGy2u4VM0oS96LxzINDDD&ipAddress=${value.ip}`;
        return this.httpClient.get(url);
      })
    )
    .subscribe(
      (response:any) => {
        
        this.type=response.type
        this.city=response.location.city
        this.continent_code=response.continent_code
        this.continent_name=response.location.geonameId
        this.latitude=response.location.lat
        this.longitude=response.location.lng
        this.region_code=response.region_code
        this.region_name=response.location.region
        this.zip=response.location.postalCode
        this.country_name=response.location.country;
        this.timezone=response.location.timezone;
        this.isp=response.isp;
        //this.capital=response.capital
        //console.log(response)
      }
    )
  }

}
