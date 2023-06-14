import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  
  { path: '', component: NavigationComponent,children:[
  { path: 'dashboard', loadChildren: () => import('./../dashboard/dashboard.module').then(m=>m.DashboardModule) },
  { path: 'admin', loadChildren: () => import('../admin-management/admin-management.module').then(m=>m.AdminManagementModule) },
  { path: 'api', loadChildren: () => import('../api-keys/api-keys-routing.module').then(m=>m.ApiKeysRoutingModule) },
  { path: 'transaction', loadChildren: () => import('../transaction-history/transaction-history-routing.module').then(m=>m.TransactionHistoryRoutingModule) },
  { path: 'client', loadChildren: () => import('../client-management/client-management-routing.module').then(m=>m.ClientManagementRoutingModule) },
  { path: 'profile', loadChildren: () => import('../profile/profile-routing.module').then(m=>m.ProfileRoutingModule) }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
   ]
})
export class LayoutRoutingModule { }
