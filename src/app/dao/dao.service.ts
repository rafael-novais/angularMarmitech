import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VagasModel } from '../vagas/vagas-model';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../login/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  private url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  public buscarVagas(){
    return this.http.get<VagasModel[]>(this.url + "vagas");
  }

  public add(vaga: VagasModel): Observable<any> {
    return this.http.post(this.url + "vagas", vaga);
  }
  public addPf(user: UsuarioModel): Observable<any>{
    return this.http.post(this.url + "usuarios", user);
  }

  public buscarUsuarios(){
    return this.http.get<UsuarioModel[]>(this.url + "usuarios");
  }

  atualizarUsuario(atualizacao: UsuarioModel, id): Observable<UsuarioModel> {
    return this.http.put<UsuarioModel>(this.url + "usuarios/" + id, atualizacao);
  }

  buscarVagaById(id): Observable<VagasModel>{
    return this.http.get<VagasModel>(this.url + "vagas/" + id);
  }

}
