import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
// import employeDetails from 'src/assets/employe.json';
import { CustomerInterface } from '../customer-interface';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
public customerdata: any;
public d:any;
search2='';
  
constructor(private activatedRoute: ActivatedRoute, private _router:Router, private service:CustomerService) {}
customdata:any
ngOnInit(): void {
this.get();
}
get()
{
  this.service.get().subscribe((data)=>{
    this.customerdata=data;
    this.customerdata?.map((c: any) => {
      c['totalCost'] = 0;
      if (c?.orders) {
        c.orders?.map((orders:any)=>{
          c['totalCost'] += orders.itemCost;
        });
      }
    });
      
  })
  }
}

//   this.customer
//   this.customer.map((c) =>
//   {
//     c['totalCost'] =0;
//     c['p1']=0;
//     if (c?.orders)
//     {
//       c.orders.map((p:{productName: any;})=>{
//        c['p1']=p.productName;
//        console.log(this.c['p1'])
//       });
//       c.orders.map((o: { itemCost: any; }) => {
//         c['totalCost'] += o .itemCost;
//   });
// }
//   });
//   this.activatedRoute.queryParams.subscribe((data: any) => {
//     // console.log(JSON.parse(data)); 
//     this.customdata = JSON.parse(data.data);
//     console.log(this.customdata);
//   })
  
    
// }
