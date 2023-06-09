import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './user-management/sign-in/sign-in.component';
import { SignUpComponent } from './user-management/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './user-management/forgot-password/forgot-password.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'', loadChildren:()=>import('./layout/layout.module').then(m=>m.LayoutModule)},
  {path:'auth', loadChildren:()=>import('./user-management/user-management-routing.module').then(m=>m.UserManagementRoutingModule)},
  { path: '**',  loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
