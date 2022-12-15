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
      if (!this.mail || !this.name || !this.gender || !this.name || !this.password || !this.fullname)
        throw new Error('Write all camps.');

      if (this.password != this.confirmation)
        throw new Error('Passwords are not equals.');



      this.registerService.register(this.mail, this.name, this.fullname, this.gender, this.password, this.photo).subscribe((user) => {
        this.router.navigate(['/']);
      }, () => {
        this.messageReturn =  'Not is possible make ragister. Try again later.';
      });

      this.messageReturn = 'Register sucess.';

    }catch (ex: any) {
      this.messageReturn = ex;
    }

  }

}
