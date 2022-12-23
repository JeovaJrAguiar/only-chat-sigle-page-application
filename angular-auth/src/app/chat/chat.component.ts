import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Message } from '../message';
import { ChatService } from '../chat.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  userMail: String = "";
  userName: String = "teste Aguiar";
  userPhoto: String = "";
  
  usernameUserRem: String = "";
  mailUserRem: String = "";
  photoUserRem: String = "";

  message: string = '';
  messages : Message[] = [
    {content: 'opa patrao', date:'12/12/12', from: 'igor'},
    {content: 'opa patrao', date:'12/12/12', from: 'eu'}
  ];

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const mailUser = String(this.route.snapshot.paramMap.get('userMail'));
    const mailUserRem = String(this.route.snapshot.paramMap.get('mailUserRem'));

    this.userName = mailUser;

    this.homeService.getUser(mailUserRem).subscribe(result => {
        this.usernameUserRem = result.username,
        this.mailUserRem = result.mail,
        this.photoUserRem = result.photo
    });

    this.homeService.getUser(mailUser).subscribe(result => {
        this.userName = result.username,
        this.userMail = result.mail,
        this.userPhoto = result.photo
    });
  
  }

  sendMessage(){
    // recarregar a conversa de o tempo de 3 milisegundos
    //this.router.navigate(['/chat/']);
  }
}
