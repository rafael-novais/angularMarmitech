import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VagasModel } from '../vagas-model';
import { DaoService } from 'src/app/dao/dao.service';

@Component({
  selector: 'app-vagas-form',
  templateUrl: './vagas-form.component.html',
  styleUrls: ['./vagas-form.component.css']
})
export class VagasFormComponent implements OnInit {

  pageForm: FormGroup;

  constructor(private fb: FormBuilder,
              private dao: DaoService) {

                this.pageForm = this.fb.group({
                  titulo: [''],
                  empresa: [''],
                  cargo: [''],
                  descricao: [''],
                });

               }

  ngOnInit() {
  }

  salvar(){

    const vaga: VagasModel = this.pageForm.value as VagasModel;

    this.dao.add(vaga).subscribe(retorno => {
      alert(retorno);
    });
  }

}
