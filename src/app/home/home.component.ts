import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../models/usuario.model';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;

  constructor(
      private auth: AngularFireAuth,
      private usuariosService: UsuariosService,
      private router: Router
  ) { }

  async ngOnInit(): Promise<void> {

      this.usuario = await this.usuariosService.getUsuarioLogado();

  }

  async sair() {
      await this.auth.signOut();
      this.router.navigateByUrl('/login')
  }

}
