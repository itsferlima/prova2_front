import { ProdutoListarComponent } from './components/views/produto/produto-listar/produto-listar.component';
import { CarrinhoComponent } from './components/views/home/carrinho/carrinho.component';
import { IndexComponent } from './components/views/home/index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCadastrarComponent } from './components/views/produto/produto-cadastrar/produto-cadastrar.component';

const routes: Routes = [
  {
    path:"",
    component: IndexComponent,
  },
  {
    path:"home/carrinho",
    component: CarrinhoComponent,
  },
  {
    path:"produto/listar",
    component: ProdutoListarComponent,
  },
  {
    path:"produto/cadastrar",
    component: ProdutoCadastrarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
