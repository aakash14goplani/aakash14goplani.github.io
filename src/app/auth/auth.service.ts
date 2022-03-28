import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({ providedIn: 'root' })
export class UserAuthService {

  constructor(
    private firebaseAuth: AngularFireAuth
  ) { }

  signInWithEmailAndPassword(email: string, password: string) {
    console.log(email, password);
  }

  signInWithGoogle() { }
}
