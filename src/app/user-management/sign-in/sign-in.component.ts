import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/app/environment/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    const { username, password, rememberMe } = this.loginForm.value;
    this.apiService.sendRequest(environment.login, 'post', {email: username, password, rememberMe }).subscribe({
      next: (res)=> {
        console.log(res)
      },
      error: (error)=> {
        console.log(error)
      }
    })
  }

}
