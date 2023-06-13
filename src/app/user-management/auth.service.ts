import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public registrationForm: FormGroup

  constructor(fb: FormBuilder) { 
    this.registrationForm = fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      phoneNo: [null, [Validators.required]],
      country: [null, [Validators.required]],
      city: [null, [Validators.required]],
      address: [null, [Validators.required]],
      terms: [false]
    })
  }
}
