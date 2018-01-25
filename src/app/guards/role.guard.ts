import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthService as Authentication} from '../services/auth.service'


@Injectable()
export class RoleGuardService implements CanActivate {
    private role: string;
  constructor( public router: Router,  private afAuth: AngularFireAuth, private authentication: Authentication) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const role = route.data.role;
    return this.authentication.getRole() !== role ? false:true;
  }

  }