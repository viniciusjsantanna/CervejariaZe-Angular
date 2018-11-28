import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from 'src/app/produto/produto.component';
import { AuthComponent } from './auth/auth.component';
import { ProdutoCadastarComponent } from './produto/Cadastrar/produto-cadastar/produto-cadastar.component';

const routes: Routes = [
  {
    path: 'produto',
    component: ProdutoComponent
  },
  {
    path: 'produto-cadastrar',
    component: ProdutoCadastarComponent
  },
  {
    path: 'login',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
