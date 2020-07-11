import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MarcasService } from '../services/marcas.service';
import { Marca } from '../models/marca.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastrar-marca',
  templateUrl: './cadastrar-marca.component.html',
  styleUrls: ['./cadastrar-marca.component.scss']
})
export class CadastrarMarcaComponent implements OnInit {


  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private marcasService: MarcasService,
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

    const marca = this.formulario.value as Marca;

    const marcaRetorno = await this.marcasService.add(marca);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

    this.snackBar.open('Nova Marca cadastrada com Sucesso!');
  }

  voltar(){
    this.location.back();
  }
}
