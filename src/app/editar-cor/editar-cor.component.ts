import { Component, OnInit, ViewChild } from '@angular/core';
import { Cor } from '../models/cor.model';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { CorService } from '../services/cor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-cor',
  templateUrl: './editar-cor.component.html',
  styleUrls: ['./editar-cor.component.scss']
})
export class EditarCorComponent implements OnInit {

  idCor: string;
  cor: Cor;
  cores: Observable<Cor[]>;
  
  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private corService: CorService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private activedRoute: ActivatedRoute,
    ) { }

  async ngOnInit(){
    this.idCor = await this.activedRoute.snapshot.paramMap.get('id');
    this.cor = await this.corService.get(this.idCor);
    this.formulario.patchValue(this.cor);
    this.cores = this.corService.getObservable();
  }

  async submit(){

    if(!this.formulario.valid){
      return;
    }
    this.formulario.disable();

    const cor = this.formulario.value as Cor;

    const corRetorno = await this.corService.update(this.idCor, cor);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

    this.snackBar.open('Cor editada com Sucesso!');
    this.router.navigateByUrl('/home/produtos');
  }

  voltar(){
    this.location.back();
  }

  excluir(){
    this.corService.delete(this.cor);
    this.snackBar.open('Cor excluida com Sucesso!');
    this.router.navigateByUrl('/home/produtos');
  }
}
