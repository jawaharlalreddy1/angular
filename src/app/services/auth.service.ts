import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable()
export class AuthService {
  public role: string;
  private roleValue: any;
  constructor(private afAuth: AngularFireAuth, private http: Http) { }

  public setRole(role): void {
      this.role = role;
  }

  public getRole(): string {
    return this.role;
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => {          
          resolve(userData);
        },
        err => reject(err));
    });
  }

  // signup(email: string, password: string) {
  //   this.afAuth
  //     .auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(value => {
  //       console.log('Success!', value);
  //     })
  //     .catch(err => {
  //       console.log('Something went wrong:',err.message);
  //     });    
  // }
  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  getMockRolesData ():Observable<any> {
    return this.http.get('assets/json/mock-roles.json')
    .map((response: Response) => {
        return response.json();
    }
);

  }

}
