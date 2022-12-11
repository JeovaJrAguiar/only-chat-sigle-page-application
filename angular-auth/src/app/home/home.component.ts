import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { Card } from '../card'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameOrMail: string = '';
  cards : Card[] = [
    {username: 'igor', image:'https://cdn-icons-png.flaticon.com/512/2319/2319177.png', mail: 'asdfa@fad'},
    {username: 'igor', image:'https://cdn-icons-png.flaticon.com/512/2319/2319177.png', mail: 'asdfa@fad'},
    {username: 'igor', image:'https://cdn-icons-png.flaticon.com/512/2319/2319177.png', mail: 'asdfa@fad'},
    {username: 'igor', image:'https://cdn-icons-png.flaticon.com/512/2319/2319177.png', mail: 'asdfa@fad'}
  ];
  
  constructor(
    //private homeService: homeService,
    private router: Router,
    private localStorage: StorageService
    ) { }

  ngOnInit(): void {
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
