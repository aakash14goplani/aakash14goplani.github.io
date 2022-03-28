import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  @ViewChild('emailInput') emailInput!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private authService: UserAuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signInWithEmailAndPassword() {
    this.displayLoginform = true;
  }

  forgotPassword(email: string | undefined) {
    if (email) {
      this.authService.resetPassword(email)
        .subscribe({
          next: (userData) => {
            if (userData.errorMessage) {
              this._snackBar.open(userData.errorMessage, 'X', {
                duration: 3000,
                verticalPosition: 'bottom',
                horizontalPosition: 'center'
              });
            }
          }
        });
    } else {
      this.emailInput.nativeElement.focus();
    }
  }

  validateUser() {
    this.loginForm.updateValueAndValidity();
    if (this.loginForm.valid && this.displayLoginform) {
      this.authService.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: (userData) => {
            if (userData.isValidUser) {
              this.router.navigate(['/home']);
            } else if (userData.errorMessage) {
              this._snackBar.open(userData.errorMessage, 'X', {
                duration: 3000,
                verticalPosition: 'bottom',
                horizontalPosition: 'center'
              });
            }
          }
        });
    }
  }

}
