import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardviewComponent } from './cardview/cardview.component';
import { Page1Component } from './page1/page1.component';
import { MapviewComponent } from './mapview/mapview.component';
import { ListviewComponent } from './listview/listview.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { LoginComponent } from './login/login.component';
import { SloginComponent } from './slogin/slogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomermanagerComponent } from './customermanager/customermanager.component';
import { CommonheaderComponent } from './commonheader/commonheader.component';
import { AuthGuard } from './auth.guard';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {path:"", component:SloginComponent},
  {path:"CardviewComponent",component:CardviewComponent},
  {path:"Page1Component",component:Page1Component},
  {path:"MapviewComponent", component:MapviewComponent},
  {path:"ListviewComponent", component:ListviewComponent},
  {path:"CustomerOrdersComponent/:id",component:CustomerOrdersComponent},
  {path:"CustomerDetailsComponent/:id", component:CustomerDetailsComponent},
  {path:"EditCustomerComponent/:id", component:EditCustomerComponent},
  {path:"NewCusomerComponent",component:NewCustomerComponent},
  {path:"LoginComponent", component:LoginComponent},
  {path:"NavbarComponent" , component:NavbarComponent},
  {path:"CustomermanagerComponent", component:CustomermanagerComponent},
  {path:"CommonheaderComponent", component:CommonheaderComponent},
  {path:"AllOrders", component:AllOrdersComponent},
  {path: "AboutComponent",component:AboutComponent},
  {
    path: '**',
    redirectTo: 'CardComponent',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
