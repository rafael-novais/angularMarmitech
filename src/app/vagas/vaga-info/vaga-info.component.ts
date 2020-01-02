import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { LoginServiceService } from 'src/app/login/login-service.service';
import { DaoService } from 'src/app/dao/dao.service';
import { UsuarioModel } from 'src/app/login/usuario-model';
import { CandidaturaService } from '../candidaturas-list/candidatura.service';

@Component({
  selector: 'app-vaga-info',
  templateUrl: './vaga-info.component.html',
  styleUrls: ['./vaga-info.component.css']
})
export class VagaInfoComponent implements OnInit {

  constructor(private cs: CandidaturaService, private vs: VagasService, private ls: LoginServiceService, private dao: DaoService) { }

  ngOnInit() {
  }

  candidatar(vaga){
    alert("Você se candidatou a vaga na " + vaga.empresa + "!");
    this.cs.adicionarCandidatura(vaga.id);
  }

}
