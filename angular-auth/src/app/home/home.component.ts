import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { Card } from '../card'; 
import { MinValidator } from '@angular/forms';
import { User } from '../user';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameOrMail: string = '';
  userMail: string = '';
  userName: string = '';
  userPhoto: string = '';

  cards : Card[] = [
    {username: 'igor', image:'https://cdn-icons-png.flaticon.com/512/2319/2319177.png', mail: 'asdfa@fad'},
    {username: 'igor', image:'https://cdn-icons-png.flaticon.com/512/2319/2319177.png', mail: 'asdfa@fad'},
    {username: 'igor', image:'https://cdn-icons-png.flaticon.com/512/2319/2319177.png', mail: 'asdfa@fad'},
    {username: 'igor', image:'https://cdn-icons-png.flaticon.com/512/2319/2319177.png', mail: 'asdfa@fad'}
  ];
  
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router,
    private localStorage: StorageService
    ) { }

  ngOnInit(): void {
    var result = this.localStorage.get('authorization');
    if(result == null){
      this.userMail = 'Authorization not found';
      this.userPhoto = 'undefined';

      this.router.navigate(['/login']);
    }else{
      const frase = result.toString();
      const authData = frase.split(":");

      this.userMail = authData[0];
      this.userPhoto = authData[1];

      this.getUser();
    }
  }

  getUser(){
    this.homeService.getUser(this.userMail).subscribe(result => 
        {
          this.userName = result.username,
          this.userMail = result.mail,
          this.userPhoto = result.photo
        }
    );
  }

  home(){
    this.router.navigate(['/dashboard']);
  }

  searchUserByNameOrMail(){
    if(this.nameOrMail.includes('@')){
      // chama funcao de filtra pelo email
    }else{
      // chama funcao de filtra pelo nome
    }
    
  }

  chat(){
    this.router.navigate(['/chat']);
  }
  /*getUserByUsername(string username){
    this.router.navigate(['/dashboard']);
  }*/
}
