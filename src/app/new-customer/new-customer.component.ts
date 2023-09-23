import { Component, OnInit } from '@angular/core';
import { CustomerInterface } from '../customer-interface';
import { CustomerService } from '../customer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  productForm: CustomerInterface = {
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: {
      abbreviation: '',
      name: ''
    },
    orders: [{
      productName: '',
      itemCost: 0,
    }],
    latitude: 0,
    longitude: 0,
    id: 0
  }
  constructor(private router: Router, public fb: FormBuilder, private customerservice: CustomerService) { }

  ngOnInit(): void {

  }
  create() {
    this.customerservice.create(this.productForm).subscribe({
      next: (data) => {
        this.router.navigate(['CardviewComponent'])
      },
      error: (err) => {
        console.log(err);
      }
    })
    alert("New customer Added successfully")
  }
}
