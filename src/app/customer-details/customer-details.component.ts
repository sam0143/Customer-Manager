import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import employeDetails from 'src/assets/employe.json';
import { CustomerInterface } from '../customer-interface';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  
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
  data1:any;
  cd: any;
  customerdata: any;
  constructor(private _router: Router, private service: CustomerService, private _activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((data: any) => {
      // this.data1 = JSON.parse(data.data);
      var id = Number(data.get('id'))
      this.getby(id)
      // this.getbyidec(idec)
    })
    this._activatedRoute.queryParams.subscribe((data1: any) => {
      //this.customerdata = JSON.parse(data1?.data);;
      console.log(data1)
    });
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
  getby(id: any) {
    this.service.getby(id).subscribe(data => {
      this.customerdata = data
      console.log(data)
    })
  }
  getbyidec(id:any)
  {
    this.service.getby(id).subscribe(data=>{
      this.customerdata=data;
    })
  }
  zoomIn() {
    if (this.zoom < 1) this.zoom++;
  }
  zoomOut() {
    if (this.zoom > 1) this.zoom--;
  }
  click(event: google.maps.MapMouseEvent) {
  }
  
}
