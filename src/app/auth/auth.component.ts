import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [UserAuthService]
})
export class AuthComponent {

  displayLoginform: boolean = false;
  showPassword: boolean = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: UserAuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signInWithGoogle() {
    this.displayLoginform = false;
    this.showPassword = false;
    this.authService.signInWithGoogle();
  }

  signInWithEmailAndPassword() {
    this.displayLoginform = true;
  }

  validateUser() {
    this.loginForm.updateValueAndValidity();
    if (this.loginForm.valid && this.displayLoginform) {
      this.authService.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password);
    }
  }

}
