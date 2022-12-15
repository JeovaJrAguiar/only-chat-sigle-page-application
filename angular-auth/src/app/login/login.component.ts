import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  loginFailMessage: string = '';
  mail: string = '';

  constructor(private loginService: LoginService,
    private router: Router,
    private localStorage: StorageService
    ) { }

  ngOnInit(): void {
  }

  login(){
    if (!this.password || !this.mail){
        this.loginFailMessage = 'A camp empthy.';
        this.router.navigate(['/login']);
    }

    this.loginService.login(this.mail, this.password).subscribe((user) => {
      if(user.password == this.password){
        this.localStorage.set('authorization', this.mail + ':' + this.password);
        this.router.navigate(['/home']);
      }else {
        this.loginFailMessage = "Error, user or password invalid. Reapeat login.";
        this.router.navigate(['/login']);
      }
    }, (error) => {
      this.loginFailMessage = "Error, user or password invalid. Reapeat login.";
    });
  }
}
