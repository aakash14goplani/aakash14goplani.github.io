import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { defer, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserAuthService {

  constructor(
    private firebaseAuth: AngularFireAuth
  ) { }

  signInWithEmailAndPassword(email: string, password: string): Observable<UserSignInStatus> {
    return defer(() => this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(userData => ({ isValidUser: !!userData.user, errorMessage: '' }))
      .catch(error => ({ isValidUser: false, errorMessage: this.parseSingInResponse(error) }))
    );
  }

  resetPassword(email: string): Observable<UserSignInStatus> {
    return defer(() => this.firebaseAuth.sendPasswordResetEmail(email)
      .then(_ => ({ isValidUser: true, errorMessage: 'Please check your email with password reset instructions.' }))
      .catch(error => ({ isValidUser: false, errorMessage: this.parseSingInResponse(error) }))
    );
  }

  private parseSingInResponse(error: any): string {
    const errorCode = error.code || 'default';
    let errorMessage = '';

    switch (errorCode) {
      case 'auth/user-not-found':
        errorMessage = 'There is no user corresponding to the given email.';
        break;

      case 'auth/wrong-password':
        errorMessage = 'The password is invalid for the given email, or the account corresponding to the email does not have a password set.';
        break;

      case 'auth/invalid-email':
        errorMessage = 'Email address is not valid.';
        break;

      case 'auth/user-disabled':
        errorMessage = 'User corresponding to the given email has been disabled.';
        break;

      default:
        errorMessage = error.message || 'Unable to authenticate user.';
        break;
    }

    return errorMessage;
  }
}

interface UserSignInStatus {
  isValidUser: boolean;
  errorMessage: string;
}
