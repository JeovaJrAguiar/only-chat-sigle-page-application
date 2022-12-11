import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css']
})
export class GridCardsComponent implements OnInit {
  cards : Card[] = [];
  texto: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(){
    //this.heroService.getHeroes().subscribe(result => {
    //  this.heroes = result;
    //})
    this.texto = 'fasdfasdfasdfqwrtq34tcoanweibru1p845bnu20pvcuqrewdno'
  }

}
