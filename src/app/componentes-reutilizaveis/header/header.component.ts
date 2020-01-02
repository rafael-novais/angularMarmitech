import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/login/login-service.service';
import { Router } from '@angular/router';
import { CandidaturaService } from 'src/app/vagas/candidaturas-list/candidatura.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userLogado: LoginServiceService, 
    private router: Router,
    private cs: CandidaturaService) { }

  ngOnInit() {
  }

  irCandidaturas(){
    this.cs.listar();
    this.router.navigate(['candidaturas']);
  }

}
