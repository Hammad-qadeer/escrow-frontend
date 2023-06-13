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
    this.apiService.sendRequest(environment.register, 'post', {body: this.registrationForm.value})
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
