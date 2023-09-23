import { Component, OnInit, OnChanges,Input, SimpleChanges} from '@angular/core';
import {Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { CustomerInterface } from '../customer-interface';
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  cd:any; 
  search2='';
   p:any;
   customerdata: CustomerInterface[]=[];
  constructor(private _router:Router, private service:CustomerService) { }
  ngOnInit(): void {
  this.getdata();
  }
  getdata() {
    this.service.get().subscribe(response=>{
      this.cd=response;
      this.cd?.map((c: any) => {
      c['totalCost'] = 0;
      if (c?.orders) {
        c.orders?.map((orders:any)=>{
          c['totalCost'] += orders.itemCost;
        });
      }
    });
      console.log(response);
    })
  }
}
