import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardviewComponent } from './cardview/cardview.component';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { MapviewComponent } from './mapview/mapview.component';
import { ListviewComponent } from './listview/listview.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LoginComponent } from './login/login.component';
import { SloginComponent } from './slogin/slogin.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomermanagerComponent } from './customermanager/customermanager.component';
import { CommonheaderComponent } from './commonheader/commonheader.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { CustomerService } from './customer.service';
import { CustomerInterface } from './customer-interface';
import { CustomersModule } from './customers/customers.module';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
   
    Page1Component,
    CardviewComponent,
    SearchPipe,
    MapviewComponent,
    ListviewComponent,
    CustomerDetailsComponent,
    EditCustomerComponent,
    CustomerOrdersComponent,
    NewCustomerComponent,
    LoginComponent,
    SloginComponent,
    NavbarComponent,
    CustomermanagerComponent,
    CommonheaderComponent,
    AllOrdersComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,
    FontAwesomeModule,NgxBootstrapIconsModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    NgxPaginationModule,
    GoogleMapsModule,HttpClientModule,
    MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
