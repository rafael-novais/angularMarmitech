import { Injectable, OnInit } from '@angular/core';
import { VagasModel } from '../vagas-model';
import { LoginServiceService } from 'src/app/login/login-service.service';
import { DaoService } from 'src/app/dao/dao.service';
import { UsuarioModel } from 'src/app/login/usuario-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CandidaturaService{
  
  candidaturas: VagasModel[] = [];

  constructor(private ls: LoginServiceService,
    private dao: DaoService, private router: Router) { }
  
  listar(){
    this.candidaturas = [];
    this.ls.usuario.candidaturas.forEach(id => {
      this.dao.buscarVagaById(id).subscribe(vaga => {
        this.candidaturas.push(vaga);
      })
    })
  }

  //pra sua saúde mental evite entender o método 'buscarCandidaturas()'
  //até deus duvida da lógica desse método, tá feia a coisa mas tá 100% funcional
  adicionarCandidatura(idVaga){
  
    let adicionar = true;

    if(this.ls.usuario.candidaturas.length == 0){
      
      this.ls.usuario.candidaturas.push(idVaga);

      this.dao.atualizarUsuario(this.ls.usuario, this.ls.usuario.id).subscribe(res => {
        this.ls.iniciarSessao(this.ls.usuario);
      });
    
    }else{
      
      this.ls.usuario.candidaturas.forEach(id => {
        
        this.dao.buscarVagaById(id).subscribe(vaga => {
          
            for(let i = 0; i < this.ls.usuario.candidaturas.length; i++){
  
              //console.log(this.candidaturas[i].id + " vs " + vaga.id + " = " + (this.candidaturas[i].id == vaga.id));
              
              if(this.ls.usuario.candidaturas[i] == idVaga){
                adicionar = false;
                break
              }else{
                adicionar = true;
              }
  
            }
  
            if(adicionar){
              this.ls.usuario.candidaturas.push(idVaga);
  
              this.dao.atualizarUsuario(this.ls.usuario, this.ls.usuario.id).subscribe(res => {
                this.ls.iniciarSessao(this.ls.usuario);
              });
  
            }
        })
      })

    }
    this.router.navigate(['vagas']);
  }

  removerCandidatura(idVaga){
    if(confirm("Tem certeza que deseja cancelar sua candidatura?")){
      
      let candi = [];

      this.ls.usuario.candidaturas.forEach(id => {
        if(id != idVaga){
          candi.push(id);
        }
      })

      this.ls.usuario.candidaturas = candi;
      
      this.dao.atualizarUsuario(this.ls.usuario, this.ls.usuario.id).subscribe(res => {
        this.listar();
      });
    
    }
  }

}
