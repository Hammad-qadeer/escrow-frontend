import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManagementMainComponent } from './admin-management-main/admin-management-main.component';

const routes: Routes = [
  {path:'',component:AdminManagementMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminManagementRoutingModule { }
