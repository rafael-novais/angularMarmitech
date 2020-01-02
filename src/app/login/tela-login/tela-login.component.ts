import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DaoService } from 'src/app/dao/dao.service';
import { UsuarioModel } from '../usuario-model';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  loginForm: FormGroup;
  user: string = "candidato";

  constructor(private fb: FormBuilder, 
    private dao: DaoService, 
    private loginService: LoginServiceService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  login(){

    let email = this.loginForm.get("email").value;
    let senha = this.loginForm.get("senha").value;
    let user: UsuarioModel;

    this.dao.buscarUsuarios().subscribe(usuarios => {

      let dadosCorretos = false;

      usuarios.forEach(usuario => {
        if(usuario.email === email && usuario.senha === senha){
          dadosCorretos = true;
          user = usuario; 
        }
      })

      if(dadosCorretos){
        dadosCorretos = false;
        console.log(email + " logado com sucesso!");
        this.loginService.iniciarSessao(user);
        this.router.navigate(['vagas']);
      }else{
        alert("Dados incorretos!");
      }

    });

  }

}
