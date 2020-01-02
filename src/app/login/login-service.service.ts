import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from './usuario-model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  userLogado = false;

  email: string;
  senha: string;

  usuario: UsuarioModel;

  constructor(private router: Router) { }

  iniciarSessao(user: UsuarioModel){
    this.userLogado = true;
    this.usuario = user;
  }

  encerrarSessao(){
    this.userLogado = false;
    this.email = "";
    this.senha = "";
    this.router.navigate(['']);
  }

}
