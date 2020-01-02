import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DaoService } from 'src/app/dao/dao.service';
import { EmpresaModel } from '../empresa-model';
import { UsuarioModel } from 'src/app/login/usuario-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pf',
  templateUrl: './cadastro-pf.component.html',
  styleUrls: ['./cadastro-pf.component.css']
})
export class CadastroPfComponent implements OnInit {

  formPf: FormGroup;

  constructor(private fb: FormBuilder, private dao: DaoService, private routes: Router) { }

  ngOnInit() {
    this.formPf = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      senha: ['', Validators.required],
      foto: ['', Validators.required],
      cargo: ['', Validators.required],
      sobre: ['', Validators.required]
  })
  }

  cadastrar(){
    let novoUsuario = new UsuarioModel();
    novoUsuario.nome = this.formPf.get("nome").value;
    novoUsuario.email = this.formPf.get("email").value;
    novoUsuario.telefone = this.formPf.get("telefone").value;
    novoUsuario.senha = this.formPf.get("senha").value;
    novoUsuario.foto = this.formPf.get("foto").value;
    novoUsuario.cargo = this.formPf.get("cargo").value;
    novoUsuario.sobre = this.formPf.get("sobre").value;
    novoUsuario.candidaturas = [];

    this.dao.addPf(novoUsuario).subscribe(res => {
      alert("Usuario adicionado!");
      this.routes.navigate(['']);
    })

  }

}