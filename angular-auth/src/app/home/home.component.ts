import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { GridCardsComponent } from '../grid-cards/grid-cards.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameOrMail: string = '';

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
}
