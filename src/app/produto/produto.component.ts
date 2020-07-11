import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { Produto } from '../models/produto.model';
import { Observable } from 'rxjs';
import { Cor } from '../models/cor.model';
import { Marca } from '../models/marca.model';
import { CorService } from '../services/cor.service';
import { MarcasService } from '../services/marcas.service';
import { ProdutosService } from '../services/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  usuario: Usuario;
  produtos: Observable<Produto[]>;
  cores: Observable<Cor[]>;
  marcas: Observable<Marca[]>;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private corService: CorService,
    private marcaService: MarcasService,
    private produtoService: ProdutosService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit(): Promise<void> {
    this.usuario = await this.usuariosService.getUsuarioLogado();
    this.cores = await this.corService.getObservable();
    this.marcas = await this.marcaService.getObservable();
    this.produtos = await this.produtoService.getObservable();
  }

  usuarioAdmin(): boolean {

    if (this.usuario && this.usuario.permissao === 'admin') {
        return true;
    } else {
        return false;
    }
}

// editarEstilo(estilo: Estilo) {
//     this.router.navigate([`/home/estilos/${estilo.id}/edicao`]);
// }

  excluir(produto: Produto){
    this.produtoService.delete(produto);
    this.snackBar.open('Excluido com Sucesso!');
  }

  editarProduto(produto: Produto){
    let id = produto.id;
    this.router.navigateByUrl(`/home/produtos/${id}/editar`);
  }

  editarImagem(produto: Produto){
    let id = produto.id;
    this.router.navigateByUrl(`/home/produtos/${id}/editar/imagens`);
  }
}
