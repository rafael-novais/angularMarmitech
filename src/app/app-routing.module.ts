import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VagasListComponent } from './vagas/vagas-list/vagas-list.component';
import { VagasFormComponent } from './vagas/vagas-form/vagas-form.component';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { LoginGuardaService } from './guardas/login-guarda.service';
import { PerfilComponent } from './login/perfil/perfil.component';
import { VagaInfoComponent } from './vagas/vaga-info/vaga-info.component';
import { CandidaturasListComponent } from './vagas/candidaturas-list/candidaturas-list.component';
import { TelaCadastroComponent } from './cadastro/tela-cadastro/tela-cadastro.component';


const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'vagas', component: VagasListComponent, canActivate: [LoginGuardaService]},
  { path: 'form_vaga', component: VagasFormComponent, canActivate: [LoginGuardaService] },
  { path: 'perfil', component: PerfilComponent, canActivate: [LoginGuardaService] },
  { path: 'vaga-info', component: VagaInfoComponent, canActivate: [LoginGuardaService] },
  { path: 'candidaturas', component: CandidaturasListComponent, canActivate: [LoginGuardaService] },
  { path: 'cadastro', component: TelaCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
