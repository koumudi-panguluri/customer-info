import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { AppMaterialModule } from '../app-ui.module';
import { IndividualUserComponent } from './individual-user/individual-user.component';

@NgModule({
  declarations: [
    CustomerComponent,
    IndividualUserComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AppMaterialModule
  ]
})
export class CustomerModule { }
