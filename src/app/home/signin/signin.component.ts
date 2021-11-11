import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.nullValidator]);
  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'e-mail não pode ser vazio';
    }
    return this.email.hasError('email') ? 'verifique o e-mail informado' : '';
  }
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Password não pode ser vazio';
    }
    return this.password.hasError('password') ? 'Password não pode ser vazio' : '';
  }

  constructor ( private formBuilder: FormBuilder, private authService: AuthService ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.nullValidator]
    })
  }

  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.authenticate(email, password)
    .subscribe(
      () => console.log('auntenticado'),
      err => {
        console.log(err);
        this.loginForm.reset();
      }
    );
  }

}
