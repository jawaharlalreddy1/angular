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

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    public ngProgress: NgProgress
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngProgress.start();
    this.authService.login(this.email, this.password)
      .then((res) => {
        this.ngProgress.done();
        this.flashMessagesService.show('You are logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/myseo'])
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
