import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component'
import { ReutilizaveisModule } from '../componentes-reutilizaveis/reutilizaveis.module';

@NgModule({
  declarations: [TelaLoginComponent, TelaLoginComponent, PerfilComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ReutilizaveisModule
  ]
})
export class LoginModule { }
