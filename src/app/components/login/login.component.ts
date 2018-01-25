import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  roleValue: any;

  roles = {
        'admin': '/myseo',
        'manager': '/seogroup',
        'user': 'myseohistory'
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    public ngProgress: NgProgress
  ) {

   }

  ngOnInit() {
    //this.authService.signup('jawahar@gmail.com', '123456');
  }

  onSubmit() {
    this.ngProgress.start();
    this.authService.getMockRolesData().subscribe((response: Response) => {
      this.roleValue = response;
      this.authService.setRole(this.roleValue.roles[this.email]);
    });
    this.authService.login(this.email, this.password)
      .then((res) => {
        this.ngProgress.done();
        this.flashMessagesService.show('You are logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.roles.hasOwnProperty(this.authService.getRole()) ? 
        this.router.navigate([this.roles[this.authService.getRole()]]) : 'Unable to login you dont have previlages';
      })
      .catch((err) => {
        this.ngProgress.done();
        this.flashMessagesService.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
        this.router.navigate(['/login'])

      });
      
  }

}
