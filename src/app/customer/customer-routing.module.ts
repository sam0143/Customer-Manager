import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCustomerComponent } from '../new-customer/new-customer.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {
    path: 'customer/card',
    component: CardComponent,  
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
