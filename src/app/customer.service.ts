import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { CustomerInterface } from './customer-interface';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http:HttpClient) {}
    get(){
      return this.http.get<CustomerInterface[]>("http://localhost:3000/customers");
    }
    getby(data:any){
      return this.http.get<CustomerInterface[]>(`http://localhost:3000/customers/${data}`);
    }
    getbyidec(data:any)
    {
      return this.http.get<CustomerInterface[]>(`http://localhost:3000/customers/${data}`);
    }
    getbyidco(data:any){
      return this.http.get<CustomerInterface[]>(`http://localhost:3000/customers/${data}`);
    }
    // create(data:any)
    // {
    //   return this.http.get<CustomerInterface[]>(`http://localhost:3000/customers/${data}`);
    // }
    
    create(payload:CustomerInterface){
      return this.http.post<CustomerInterface>("http://localhost:3000/customers",payload);
    }
    update(payload:CustomerInterface)
    {
      return this.http.put(`http://localhost:3000/customers/${payload.id}`,payload);
    }
    Delete(payload:CustomerInterface){
      return this.http.delete(`http://localhost:3000/customers/${payload.id}` );
    }
  }
