import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientManagementMainComponent } from './client-management-main/client-management-main.component';

const routes: Routes = [
  {path:'',component:ClientManagementMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientManagementRoutingModule { }
