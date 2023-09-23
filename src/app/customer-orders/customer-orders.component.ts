import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerInterface } from '../customer-interface';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  // @Input() orderDetails :any;
  customerdata: any;
  public d: any;
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private service: CustomerService) {
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(d => {
      var idco = Number(d.get('id'))
      this.getbyidco(idco)
    })
  }
  getbyidco(id: any) {
    this.service.getbyidco(id).subscribe(data => {
      this.customerdata = data
      console.log(data);
      // this.customerdata?.map((c: any) => {
        this.customerdata['totalCost'] = 0;
        if (this.customerdata?.orders) {
          this.customerdata.orders?.map((orders:any)=>{
            this.customerdata['totalCost'] += orders.itemCost;
          });
        }
      // });
    })
  }
  CustomerDetails() {
    this._router.navigate(['CustomerDetailsComponent'],
      {
        queryParams:
        {
          data: JSON.stringify(this.customerdata),
        }
      })
        console.log(this.customerdata)
      
    
  }
  EditCustomer() {
    this._router.navigate(['EditCustomerComponent']);
  }
}