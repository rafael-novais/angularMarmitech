import { Injectable } from '@angular/core';
import { VagasModel } from './vagas-model';
import { Routes, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  vagaClicada: VagasModel;

  constructor(private routes: Router) { }

  abrirVagaClicada(vaga){
    this.vagaClicada = vaga;
    this.routes.navigate(['vaga-info']);
  }

}
