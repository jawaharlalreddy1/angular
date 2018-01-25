import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AppService {

    constructor(private afAuth: AngularFireAuth) { }
    
    public loginToken = new BehaviorSubject<boolean>(this.hasToken());

    private hasToken() {
        return true;
    }
}