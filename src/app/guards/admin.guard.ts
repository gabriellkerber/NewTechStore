import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(
        private usuariosService: UsuariosService,
        private route: Router,
    ) { }

    async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {

        const usuario = await this.usuariosService.getUsuarioLogado();

        if (usuario && usuario.permissao === 'admin') {
            return true;
        } else {
            return false;
        }
    }

}
