import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Message } from '../message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string = '';
  messages : Message[] = [
    {content: 'opa patrao', date:'12/12/12', from: 'igor'},
    {content: 'opa patrao', date:'12/12/12', from: 'eu'},
    {content: 'aoba', date:'12/12/12', from: 'igor'},
    {content: 'oaba', date:'12/12/12', from: 'eu'},
  ];

  constructor(
    private router: Router
  ) {
    
   }

  ngOnInit(): void {
  }

  sendMessage(){
    // message
    this.router.navigate(['/chat']);
  }
}
