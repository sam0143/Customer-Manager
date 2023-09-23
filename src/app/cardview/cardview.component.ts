import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { CustomerInterface } from '../customer-interface';
@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {
  cd: any;
  search1 = '';
  p: any;
  customers: CustomerInterface[] = [];
  constructor(private _router: Router, private service: CustomerService) { }
  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.service.get().subscribe(response => {
      this.cd = response;
      console.log(response);
    })
  }
 
}

