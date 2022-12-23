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
    {username: 'anna', image:'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400', mail: 'andre@gmail.com'},
    {username: 'carlos', image:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400', mail: 'andre@gmail.com'},
    {username: 'eduarda', image:'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400', mail: 'andre@gmail.com'},
    {username: 'fernando', image:'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400', mail: 'andre@gmail.com'},
    {username: 'gabriela', image:'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400', mail: 'andre@gmail.com'}
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

  chat(mailUserRem: String){
    this.router.navigate(["/chat/" + this.userMail + "/" + mailUserRem]);
  }
  /*getUserByUsername(string username){
    this.router.navigate(['/dashboard']);
  }*/
}
