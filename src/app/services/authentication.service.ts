import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  handleFatalError: any;

  constructor(private angularFireAuth: AngularFireAuth) { }

  loginWithEmail(email: string, pass: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email,pass);
  }

  logInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider() 
    provider.setCustomParameters({'display':'popup'});
    return this.angularFireAuth.auth.signInWithPopup(provider);
  }

  registerWithEmail(email: string, pass: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,pass);
  }

  getStatus()
  {
    return this.angularFireAuth.authState; 
  }

  logOut()
  {
    return this.angularFireAuth.auth.signOut();
  }

}