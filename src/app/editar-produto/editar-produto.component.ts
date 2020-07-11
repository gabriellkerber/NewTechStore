import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca.model';
import { Cor } from '../models/cor.model';
import { Validators, FormBuilder } from '@angular/forms';
import { ProdutosService } from '../services/produtos.service';
import { MarcasService } from '../services/marcas.service';
import { CorService } from '../services/cor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produto.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {

  marcas: Observable<Marca[]>;
  cores: Observable<Cor[]>;
  idProduto: string;

  formulario = this.formBuilder.group({
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    idMarca: ['', Validators.required],
    idCor: ['', Validators.required],
    valor: ['', Validators.required],
  });

  produto: Produto;

  constructor(
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    private marcasService: MarcasService,
    private corService: CorService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,  
  ) { }

  async ngOnInit(){
    this.marcas = this.marcasService.getObservable();
    this.cores = this.corService.getObservable();

    this.idProduto = await this.activedRoute.snapshot.paramMap.get('id');
    this.produto = await this.produtosService.get(this.idProduto);
    this.formulario.patchValue(this.produto);
  }

  async submit(){
    if(! this.formulario.valid){
      return;
    }

    const dados = this.formulario.value;
    this.produtosService.update(this.idProduto, dados);
    this.formulario.reset();
    await this.snackBar.open(`${"Produto"} ${this.produto.nome} ${"editado com Sucesso!"}`);
    this.router.navigate(["/home/produtos"]);
  }
}
