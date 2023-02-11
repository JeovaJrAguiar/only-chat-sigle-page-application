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
    {content: 'opa patrao', date:'12/12/12', hour: '12:30', from: 'Gaby'},
    {content: 'opa asdfasdfasdfasdfasdfasd asdfasdfwfrtv245fqw31rqdioanew0324r09cmqwadfsegq4gq34tqfvsdvmqn3o4ir1unc209mcqwpatrao', date:'12/12/12', hour: '17:11', from: 'Aguiar'},
    {content: 'opa patrao', date:'13/12/12', hour: '2:12', from: 'Aguiar'},
    {content: 'opa asdfasdfasdfasdfasdfasd asdfasdfwfrtv245fqw31rqdioanew0324r09cmqwadfsegq4gq34tqfvsdvmqn3o4ir1unc209mcqwpatrao', date:'13/12/12', hour: '2:14', from: 'Gaby'},
    {content: 'opa patrao', date:'13/12/12', hour: '2:30', from: 'Aguiar '},
    {content: 'opa patrao', date:'15/12/12', hour: '4:06', from: 'Aguiar'},
    {content: 'opa patrao', date:'15/12/12', hour: '9:30', from: 'Gaby'},
    {content: 'opa patrao', date:'12/12/12', hour: '12:30', from: 'Gaby'},
    {content: 'opa asdfasdfasdfasdfasdfasd asdfasdfwfrtv245fqw31rqdioanew0324r09cmqwadfsegq4gq34tqfvsdvmqn3o4ir1unc209mcqwpatrao', date:'12/12/12', hour: '17:11', from: 'Aguiar'},
    {content: 'opa patrao', date:'13/12/12', hour: '2:12', from: 'Aguiar'},
    {content: 'opa asdfasdfasdfasdfasdfasd asdfasdfwfrtv245fqw31rqdioanew0324r09cmqwadfsegq4gq34tqfvsdvmqn3o4ir1unc209mcqwpatrao', date:'13/12/12', hour: '2:14', from: 'Gaby'},
    {content: 'opa patrao', date:'13/12/12', hour: '2:30', from: 'Aguiar '},
    {content: 'opa patrao', date:'15/12/12', hour: '4:06', from: 'Aguiar'},
    {content: 'opa patrao', date:'15/12/12', hour: '9:30', from: 'Gaby'},
    {content: 'opa patrao', date:'12/12/12', hour: '12:30', from: 'Gaby'},
    {content: 'opa asdfasdfasdfasdfasdfasd asdfasdfwfrtv245fqw31rqdioanew0324r09cmqwadfsegq4gq34tqfvsdvmqn3o4ir1unc209mcqwpatrao', date:'12/12/12', hour: '17:11', from: 'Aguiar'},
    {content: 'opa patrao', date:'13/12/12', hour: '2:12', from: 'Aguiar'},
    {content: 'opa asdfasdfasdfasdfasdfasd asdfasdfwfrtv245fqw31rqdioanew0324r09cmqwadfsegq4gq34tqfvsdvmqn3o4ir1unc209mcqwpatrao', date:'13/12/12', hour: '2:14', from: 'Gaby'},
    {content: 'opa patrao', date:'13/12/12', hour: '2:30', from: 'Aguiar '},
    {content: 'opa patrao', date:'15/12/12', hour: '4:06', from: 'Aguiar'},
    {content: 'opa patrao', date:'15/12/12', hour: '9:30', from: 'Gaby'},
    {content: 'opa patrao', date:'12/12/12', hour: '12:30', from: 'Gaby'},
    {content: 'opa asdfasdfasdfasdfasdfasd asdfasdfwfrtv245fqw31rqdioanew0324r09cmqwadfsegq4gq34tqfvsdvmqn3o4ir1unc209mcqwpatrao', date:'12/12/12', hour: '17:11', from: 'Aguiar'},
    {content: 'opa patrao', date:'13/12/12', hour: '2:12', from: 'Aguiar'},
    {content: 'opa asdfasdfasdfasdfasdfasd asdfasdfwfrtv245fqw31rqdioanew0324r09cmqwadfsegq4gq34tqfvsdvmqn3o4ir1unc209mcqwpatrao', date:'13/12/12', hour: '2:14', from: 'Gaby'},
    {content: 'opa patrao', date:'13/12/12', hour: '2:30', from: 'Aguiar '},
    {content: 'opa patrao', date:'15/12/12', hour: '4:06', from: 'Aguiar'},
    {content: 'opa patrao', date:'15/12/12', hour: '9:30', from: 'Gaby'}
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
