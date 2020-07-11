import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarMarcaComponent } from './cadastrar-marca/cadastrar-marca.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { EditarMarcaComponent } from './editar-marca/editar-marca.component';
import { AppComponent } from './app.component';
import { EdicaoListaImagemProdutoComponent } from './edicao-lista-imagem-produto/edicao-lista-imagem-produto.component';
import { CadastrarCorComponent } from './cadastrar-cor/cadastrar-cor.component';
import { EditarCorComponent } from './editar-cor/editar-cor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { AuthGuard } from './guards/auth.guard';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home/produtos' },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios/cadastro', component: CadastroUsuarioComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'usuarios/cadastro', component: CadastrarUsuarioComponent },
      { path: 'marcas/cadastro', component: CadastrarMarcaComponent },
      { path: 'produtos/cadastro', component: CadastroProdutoComponent },
      { path: 'produtos/:id/editar/imagens', component: EdicaoListaImagemProdutoComponent },
      { path: 'produtos', component: ProdutoComponent },
      { path: 'produtos/:id/editar', component: EditarProdutoComponent },
      { path: 'carrinho', component: CarrinhoComponent, canActivate: [AuthGuard] },
      { path: 'marcas/:id/editar', component: EditarMarcaComponent, canActivate: [AuthGuard] },
      { path: 'cor/cadastro', component: CadastrarCorComponent },
      { path: 'cor/:id/editar', component: EditarCorComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
