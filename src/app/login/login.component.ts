import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public authService: AuthService, public router : Router) { 
    this.setMessage();
  }


  login() {
    this.authService.login();
    this.setMessage();



    this.authService.isAuthenticated()
    .then(isAuthenticated=> {
      if(isAuthenticated){
        let redirecUrl = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl): '/admin';
        this.router.navigateByUrl(redirecUrl);
      }
    })
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  setMessage() {
    this.message = 'logged ';


    this.authService.isAuthenticated()
      .then((isAuthenticated: Boolean) => {
        if (isAuthenticated) {
          this.message += 'in';
        } else {
          this.message += 'out';
        }
      });
  }

  ngOnInit(): void {
  }

}
