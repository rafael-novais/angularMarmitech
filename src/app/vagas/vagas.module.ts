import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasListComponent } from './vagas-list/vagas-list.component';
import { VagasFormComponent } from './vagas-form/vagas-form.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ReutilizaveisModule } from '../componentes-reutilizaveis/reutilizaveis.module';
import { VagaInfoComponent } from './vaga-info/vaga-info.component';
import { CandidaturasListComponent } from './candidaturas-list/candidaturas-list.component';

@NgModule({
  declarations: [VagasListComponent, VagasFormComponent, VagaInfoComponent, CandidaturasListComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReutilizaveisModule
  ]
})
export class VagasModule { }
