import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
       ],
  imports: [
    FormsModule,
    CommonModule,
    CustomerRoutingModule,
    // MatFormField,
    // MatFormFieldControl,
    MatInputModule,
    
  ]
})
export class CustomerModule { }
