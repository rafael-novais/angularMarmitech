import { Component } from '@angular/core';
import { VagasModel } from '../vagas-model';
import { DaoService } from 'src/app/dao/dao.service';
import { LoginServiceService } from 'src/app/login/login-service.service';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-vagas-list',
  templateUrl: './vagas-list.component.html',
  styleUrls: ['./vagas-list.component.css']
})
export class VagasListComponent {
  
  private vagas: Array<VagasModel> = [];

  constructor(private dao: DaoService, 
    private userLogado: LoginServiceService,
    private vs: VagasService
    ) {}

  ngOnInit() {
    this.dao.buscarVagas().subscribe(response => {
      response.forEach(vaga => {
        this.vagas.push(vaga);
      });
    });
  }

  clickVaga(vaga){
    this.vs.abrirVagaClicada(vaga);
  }

}
