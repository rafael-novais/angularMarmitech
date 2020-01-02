import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pj',
  templateUrl: './cadastro-pj.component.html',
  styleUrls: ['./cadastro-pj.component.css']
})
export class CadastroPjComponent implements OnInit {

  formPj: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formPj = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      senha: ['', Validators.required],
  })
  }

  cadastrar(){

  }

}
