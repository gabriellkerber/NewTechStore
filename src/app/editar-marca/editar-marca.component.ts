import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MarcasService } from '../services/marcas.service';
import { Marca } from '../models/marca.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-marca',
  templateUrl: './editar-marca.component.html',
  styleUrls: ['./editar-marca.component.scss']
})
export class EditarMarcaComponent implements OnInit {

  idMarca: string;
  marca: Marca;

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private marcasService: MarcasService,
    private activedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

  async ngOnInit(){
    const id = this.activedRoute.snapshot.paramMap.get('id');

    this.marca = await this.marcasService.get(id);

    this.idMarca = id;

    this.formulario.patchValue(this.marca);
  }

  async submit(){

    if(!this.formulario.valid){
      return;
    }
    this.formulario.disable();

    const marca = this.formulario.value as Marca;

    await this.marcasService.update(this.idMarca, marca);

    this.formulario.enable();
    this.formGroupDirective.resetForm();
    this.snackBar.open('Marca editado com sucesso!');
    this.router.navigateByUrl('home/produtos');
  }

}
