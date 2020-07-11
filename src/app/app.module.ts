import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { environment } from 'src/environments/environment';
import { EditarMarcaComponent } from './editar-marca/editar-marca.component';
import { CadastrarMarcaComponent } from './cadastrar-marca/cadastrar-marca.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select'; 
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { registerLocaleData } from '@angular/common';
import { EdicaoListaImagemProdutoComponent } from './edicao-lista-imagem-produto/edicao-lista-imagem-produto.component';
import { EdicaoImagemProdutoComponent } from './edicao-imagem-produto/edicao-imagem-produto.component';
import { CadastrarCorComponent } from './cadastrar-cor/cadastrar-cor.component';
import { EditarCorComponent } from './editar-cor/editar-cor.component';
import { LoginComponent } from './login/login.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { ProdutoComponent } from './produto/produto.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    EditarMarcaComponent,
    CadastrarMarcaComponent,
    CadastroProdutoComponent,
    EdicaoListaImagemProdutoComponent,
    EdicaoImagemProdutoComponent,
    CadastrarCorComponent,
    EditarCorComponent,
    LoginComponent,
    CadastrarUsuarioComponent,
    HomeComponent,
    CadastroUsuarioComponent,
    ProdutoComponent,
    CarrinhoComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue :{ duration: 2500}},
    {provide: LOCALE_ID, useValue: 'pt'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
