import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CustomerInterface } from '../customer-interface';
import { CustomerService } from '../customer.service';
// import  employeDetails from 'src/assets/employe.json';
@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit 
{
customers:any
customerdata:CustomerInterface[]=[];
  public d: any[] = [];
  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    
  };
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private service:CustomerService) { }
  

  ngOnInit() {
       this.getdata();

    // this._activatedRoute.queryParams.subscribe((employeDetails)=>{
    //   this.customerdata=employeDetails;
    //   console.log(this.customerdata)
    // });
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
  zoomIn() {
    if (this.zoom < 1) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > 1) this.zoom--;
  }
  click(event: google.maps.MapMouseEvent) {
    console.log(event);
  }
  getdata()
  {
    this.service.get().subscribe(response=>{
      this.customers=response;
      console.log(response)
    })
   
  }
  
}