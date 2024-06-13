import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { Iusuario } from '../modelos/iusuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private auth = inject(Auth);
  private user = user(this.auth);


  constructor() { }

  register(email: string, pass: string) {

    const actionCodeSettings = {
      url: 'https://tpclinica-dbe4c.firebaseapp.com',
      handleCodeInApp: true
    };

    createUserWithEmailAndPassword(this.auth, email, pass).then(
      r => {
        sendEmailVerification(r.user, actionCodeSettings);


      }).catch(e =>
        console.log("Error", e)
      );
  }
  login(email: string, pass: string) {
    return signInWithEmailAndPassword(this.auth, email, pass);

  }

  logout() {
    signOut(this.auth);
  }

  getUser() {
    return this.user;
  }

}
