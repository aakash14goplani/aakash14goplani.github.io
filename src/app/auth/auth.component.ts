import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserAuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [UserAuthService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {

  displayLoginform: boolean = false;
  displaySpinner$: Subject<boolean> = new Subject();
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
      this.displaySpinner$.next(true);
      this.authService.resetPassword(email)
        .subscribe({
          next: (userData) => {
            if (userData.errorMessage) {
              this._snackBar.open(userData.errorMessage, 'X', {
                duration: 6000,
                verticalPosition: 'bottom',
                horizontalPosition: 'center'
              });
            }
          },
          complete: () => this.displaySpinner$.next(false)
        });
    } else {
      this.emailInput.nativeElement.focus();
    }
  }

  validateUser() {
    this.loginForm.updateValueAndValidity();
    if (this.loginForm.valid && this.displayLoginform) {
      this.displaySpinner$.next(true);
      this.authService.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: (userData) => {
            if (userData.isValidUser) {
              this.router.navigate(['/home']);
            } else if (userData.errorMessage) {
              this._snackBar.open(userData.errorMessage, 'X', {
                duration: 6000,
                verticalPosition: 'bottom',
                horizontalPosition: 'center'
              });
            }
          },
          complete: () => this.displaySpinner$.next(false)
        });
    }
  }

}
