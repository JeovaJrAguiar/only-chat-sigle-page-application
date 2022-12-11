import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mail: string = '';
  name: string = '';
  password: string = '';
  confirmation: string = '';
  registerFailMessage: string = '';

  gender: string = '';
  photo: string = '';

  constructor(
    //private registerService: RegisterService,
    private router: Router,
    private localStorage: StorageService
    ) { }

  ngOnInit(): void {
  }
  register(){
    /*
    - Cadastrar usuário
    - Fazer upload da foto OU informar link para a foto
    - Verificar se a senha foi digitada igualmente no campo de verificação
    - Não permitir cadastro de usuário com email já existente
    */


    if(this.password != this.confirmation){
      this.registerFailMessage = 'Distinct passwords. Please try again.';
    }else{
      this.router.navigate(['/dashboard']);
    }
  }

}
