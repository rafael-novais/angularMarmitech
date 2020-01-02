import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPfComponent } from './cadastro-pf/cadastro-pf.component';
import { CadastroPjComponent } from './cadastro-pj/cadastro-pj.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { ReutilizaveisModule } from '../componentes-reutilizaveis/reutilizaveis.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroPfComponent, CadastroPjComponent, TelaCadastroComponent],
  imports: [
    CommonModule,
    ReutilizaveisModule,
    ReactiveFormsModule
  ]
})
export class CadastroModule { }
