import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerInterface } from '../customer-interface';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  CustomerForm:any;
  customerdata:any;
  editcustomer:any
  constructor(private _router:Router, private _activatedRoute:ActivatedRoute, private service:CustomerService) { }
 
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param)=>{
      var id=Number(param.get('id'));
      this.getby(id);
    })
    
//     this._activatedRoute.queryParams.subscribe((params:{data})=>{
// console.log(params)
// let data1=JSON.parse(params.data)
// var id=data1["id"];
// this.getby(id);
//     })

    this.CustomerForm=this.editcustomer;
  }
  getby(id:number){
    this.service.getby(id).subscribe((data)=>{
      this.CustomerForm=data;
      console.log(this.CustomerForm)
    })  
  
  }
  
  update() {
    this.service.update(this.CustomerForm).subscribe({
      next:(data)=>{
        this._router.navigate(['CardviewComponent']);
        alert("Customer data successfully updated");
      }
    })
  }
  Delete() {
    this.service.Delete(this.CustomerForm).subscribe({
      next:(data)=>{
        this._router.navigate(['CardviewComponent']);
        alert("Customer data successfully updated");
      }
    })
  }
  
}
