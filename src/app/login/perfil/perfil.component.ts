import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { UsuarioModel } from '../usuario-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DaoService } from 'src/app/dao/dao.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  formEdicao: FormGroup;

  constructor(public ls: LoginServiceService,
    private fb: FormBuilder, private dao: DaoService) { 
    }

  ngOnInit() {
    this.formEdicao = this.fb.group({
      nome: [this.ls.usuario.nome, Validators.required],
      email: [this.ls.usuario.email, Validators.required],
      telefone: [this.ls.usuario.telefone, Validators.required],
      senha: [this.ls.usuario.senha, Validators.required],
      foto: [this.ls.usuario.foto, Validators.required],
      cargo: [this.ls.usuario.cargo, Validators.required],
      sobre: [this.ls.usuario.sobre, Validators.required]
    })
  }

  atualizar(){
    let atualizacao = new UsuarioModel();
    let id = this.ls.usuario.id;
    atualizacao.nome = this.formEdicao.get("nome").value;
    atualizacao.email = this.formEdicao.get("email").value;
    atualizacao.telefone = this.formEdicao.get("telefone").value;
    atualizacao.senha = this.formEdicao.get("senha").value;
    atualizacao.foto = this.formEdicao.get("foto").value;
    atualizacao.cargo = this.formEdicao.get("cargo").value;
    atualizacao.sobre = this.formEdicao.get("sobre").value;
    atualizacao.candidaturas = this.ls.usuario.candidaturas;

    this.dao.atualizarUsuario(atualizacao, id).subscribe();
    this.ls.iniciarSessao(atualizacao);
  
  }

}
