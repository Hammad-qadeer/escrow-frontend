import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientManagementRoutingModule } from './client-management-routing.module';
import { ClientManagementMainComponent } from './client-management-main/client-management-main.component';


@NgModule({
  declarations: [
    ClientManagementMainComponent
  ],
  imports: [
    CommonModule,
    ClientManagementRoutingModule
  ]
})
export class ClientManagementModule { }
