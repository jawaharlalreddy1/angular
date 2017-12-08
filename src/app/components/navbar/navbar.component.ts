import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../services/auth.service';
import { auth } from 'firebase/app';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private shareddataservice: SharedDataService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
        this.shareddataservice.userId = this.loggedInUser;        
      } else {
        this.isLoggedIn = false;
      }
    })

  }


  onLogOutClick() {
    this.authService.logOut();
    this.flashMessagesService.show('You are logged out', {
      cssClass: 'alert-success', timeout: 4000
    });
    this.router.navigate(['/login']);
  }
}
