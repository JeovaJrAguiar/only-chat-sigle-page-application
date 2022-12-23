import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { Card } from '../card'; 
import { MinValidator } from '@angular/forms';
import { User } from '../user';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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


  /*
      id: number;
    username: string;
    password: string;
    fullname: string;
    mail: string;
    photo: string;
  */
  cards: User[] = [];
  
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
      this.loadGridCards(this.userMail);

    }
  }

  loadGridCards(userMail: string){
    this.homeService.getUsers().subscribe(result => {
      this.cards = this.cards.concat(result);
    });

    var index;
    for (index = 0; index < this.cards.length; index++) {
      if(this.cards[index].mail == userMail) return;
    }

    this.cards.splice(index, 1);
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
    this.router.navigate(["/chat/"+ this.userMail + "/" + mailUserRem]);
  }
  /*getUserByUsername(string username){
    this.router.navigate(['/dashboard']);
  }*/
}
