import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { CustomersRoutingModule } from './customers-routing.module';
import { CardviewComponent } from '../cardview/cardview.component';





@NgModule({
  declarations: [],
  imports: [
    CustomersRoutingModule,
    BrowserModule,
    // CardviewComponent
  ]
})
export class CustomersModule { }
