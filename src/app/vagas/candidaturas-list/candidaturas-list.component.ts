import { Component, OnInit } from '@angular/core';
import { CandidaturaService } from './candidatura.service';
import { LoginServiceService } from 'src/app/login/login-service.service';

@Component({
  selector: 'app-candidaturas-list',
  templateUrl: './candidaturas-list.component.html',
  styleUrls: ['./candidaturas-list.component.css']
})
export class CandidaturasListComponent implements OnInit {

  constructor(private ls: LoginServiceService, private cs: CandidaturaService) { }

  ngOnInit() {
  }

  

}
