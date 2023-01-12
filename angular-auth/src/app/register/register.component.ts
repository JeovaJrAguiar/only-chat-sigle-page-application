import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorInRegister: number = 0;
  mail: string = '';
  name: string = '';
  password: string = '';
  confirmation: string = '';
  registerFailMessage: string = '';
  fullname: string = '';

  gender: string = '';
  photo: string = '';
  messageReturn: string = '';

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private localStorage: StorageService,
    ) {}

  ngOnInit(): void {
  }

  register(): void {
    try {
      if(this.name != '' || this.fullname != ''|| this.mail != '' || this.gender != '' || this.password != '' || this.confirmation != ''){
        this.messageReturn = 'Write all camps.';
        this.errorInRegister = 1;
      }

      if (this.password != this.confirmation){
        this.messageReturn = 'Passwords are not equals.';
        this.errorInRegister = 1;
      }else {
        this.registerService.register(this.mail, this.name, this.fullname, this.gender, this.password, this.photo).subscribe((user) => {
          this.router.navigate(['/']);
        }, () => {
          this.messageReturn =  'Not is possible make ragister. Try again later.';
        });
  
        this.messageReturn = 'Register sucess.';
      }
    }catch (ex: any) {
      this.messageReturn = ex;
    }

  }

}
