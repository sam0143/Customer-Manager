import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardviewComponent } from '../cardview/cardview.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
