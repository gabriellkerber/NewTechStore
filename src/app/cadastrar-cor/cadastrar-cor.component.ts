import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MarcasService } from '../services/marcas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Cor } from '../models/cor.model';
import { CorService } from '../services/cor.service';

@Component({
  selector: 'app-cadastrar-cor',
  templateUrl: './cadastrar-cor.component.html',
  styleUrls: ['./cadastrar-cor.component.scss']
})
export class CadastrarCorComponent implements OnInit {


  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private corService: CorService,
    private snackBar: MatSnackBar,
    private location: Location
    ) { }

  ngOnInit(): void {

  }

  async submit(){

    if(!this.formulario.valid){
      return;
    }
    this.formulario.disable();

    const cor = this.formulario.value as Cor;

    const corRetorno = await this.corService.add(cor);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

    this.snackBar.open('Nova Cor cadastrada com Sucesso!');
  }

  voltar(){
    this.location.back();
  }
}
