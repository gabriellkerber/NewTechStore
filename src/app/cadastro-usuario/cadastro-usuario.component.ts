import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario.model';
import { MatSnackBar } from '@angular/material/snack-bar';

class NovoUsuario {
    nome: string;
    email: string;
    senha: string;
}

@Component({
    selector: 'app-cadastro-usuario',
    templateUrl: './cadastro-usuario.component.html',
    styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

    usuarioJaCadastrado: boolean;

    formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmacaoSenha: ['', [Validators.required, Validators.minLength(6)]],
    });

    constructor(
        private formBuilder: FormBuilder,
        private location: Location,
        private router: Router,
        private auth: AngularFireAuth,
        private usuariosService: UsuariosService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
    }

    async submit() {

        if (!this.formulario.valid ) {
            return;
        }
        const senha = this.formulario.get('senha').value;
        const confSenha = this.formulario.get('confirmacaoSenha').value;

        if(senha === confSenha){
            this.formulario.disable();

        const novoUsuario = this.formulario.value as NovoUsuario;

        try {

            const userCredential = await this.auth.createUserWithEmailAndPassword(novoUsuario.email, novoUsuario.senha);
            const uid = userCredential.user.uid;

            let usuario = {
                email: novoUsuario.email,
                nome: novoUsuario.nome
            } as Usuario;

            usuario = await this.usuariosService.add(uid, usuario);

            this.router.navigate(['home/produtos']);

        } catch (error) {

            console.log(error);
            this.usuarioJaCadastrado = true;

            this.formulario.enable();
        }

        }else{
            this.snackBar.open("Senhas não Conferem!");
            return;
        }


    }

    voltar() {
        this.location.back();
    }

}
