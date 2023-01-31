import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Message } from '../message';
import { ChatService } from '../chat.service';
import { HomeService } from '../home.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  userMail: string = "";
  userName: string = "teste Aguiar";
  userPhoto: String = "";
  
  usernameUserRem: string = "";
  mailUserRem: string = "";
  photoUserRem: string = "";

  message: string = '';
  messages : Message[] = [
    {content: 'opa patrao', date:'12/12/12', from: 'igor'},
    {content: 'opa patrao', date:'12/12/12', from: 'eu'}
  ];

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private homeService: HomeService,
    private router: Router,
    private localStorage: StorageService
  ) { }

  ngOnInit(): void {
    this.loadUserRem();
  
  }

  loadUserRem(){
    var result = this.localStorage.get('authorization');
    if(result == null){
      this.userMail = 'Authorization not found';
      this.userPhoto = 'undefined';

      this.router.navigate(['/login']);
    }else{
      const frase = result.toString();
      const authData = frase.split(":");

      this.userMail = authData[0];
      const mailUserRem = String(this.route.snapshot.paramMap.get('mailUserRem'));

      this.homeService.getUser(mailUserRem).subscribe(result => {
          this.usernameUserRem = result.username,
          this.mailUserRem = result.mail,
          this.photoUserRem = result.photo
      });
      this.homeService.getUser(this.userMail).subscribe(result => {
        this.userName = result.username,
        this.userMail = result.mail,
        this.userPhoto = result.photo
      });
    }
  }

  sendMessage(){
    // recarregar a conversa de o tempo de 3 milisegundos
    //this.router.navigate(['/chat/']);
  }
}
