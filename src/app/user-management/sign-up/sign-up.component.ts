import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { AuthService } from '../auth.service';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/app/environment/environment';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {


  public registrationForm!: FormGroup

  ngOnInit() {
    this.registrationForm = this.registrationService.registrationForm
  }

  constructor(private registrationService: AuthService, private apiService: ApiService) {}

  register() {
    const { firstName, lastName, email, password, confirmPassword,  phoneNo, country, city, address, terms} = this.registrationForm.value
    this.apiService.sendRequest(environment.register, 'post', {firstName, lastName, email, password, phoneNo: phoneNo.toString()})
        .subscribe({
          next: (res)=> {
            console.log(res)
          },
          error: (error)=> {
            console.log(error)
          }
        }) 
  }
}
