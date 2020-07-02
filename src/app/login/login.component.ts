import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'egg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.email
      ])
    });
  }

  get f(): { [key: string]: AbstractControl } { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }

}
