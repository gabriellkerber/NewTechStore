import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private usuariosService: UsuariosService,
  ) { }

  async ngOnInit(){
    this.usuario = await this.usuariosService.getUsuarioLogado();
  }

  usuarioAdmin(): boolean {

    if (this.usuario) {
        return true;
    } else {
        return false;
    }
}

}
