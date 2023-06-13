import { NgModule } from '@angular/core';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    UserManagementRoutingModule,
    SharedModule,
  ]
})
export class UserManagementModule { }
