import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'', loadChildren:()=>import('./layout/layout.module').then(m=>m.LayoutModule)},
  {path:'auth', loadChildren:()=>import('./user-management/user-management-routing.module').then(m=>m.UserManagementRoutingModule)},
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
