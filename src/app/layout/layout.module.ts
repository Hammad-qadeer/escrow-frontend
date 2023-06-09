import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
// import { NavigationComponent } from './navigation/navigation.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardMainComponent } from '../dashboard/dashboard-main/dashboard-main.component';
import { SharedModule } from '../shared/shared.module';
import { ClientManagementMainComponent } from '../client-management/client-management-main/client-management-main.component';
import { ApiKeysMainComponent } from '../api-keys/api-keys-main/api-keys-main.component';
import { TransactionHistoryMainComponent } from '../transaction-history/transaction-history-main/transaction-history-main.component';
import { AdminManagementMainComponent } from '../admin-management/admin-management-main/admin-management-main.component';


@NgModule({
  declarations: [NavigationComponent, DashboardMainComponent, ClientManagementMainComponent, ApiKeysMainComponent, TransactionHistoryMainComponent,AdminManagementMainComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
