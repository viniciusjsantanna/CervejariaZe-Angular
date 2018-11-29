import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from 'src/app/produto/produto.component';
import { AuthComponent } from './auth/auth.component';
import { ProdutoCadastarComponent } from './produto/Cadastrar/produto-cadastar.component';
import { AuthGuards } from './guards/auth.guards';

const routes: Routes = [
  {
    path: 'produto',
    component: ProdutoComponent,
    // canActivate: [AuthGuards]
  },
  {
    path: '',
    component: ProdutoComponent,
    // canActivate: [AuthGuards]
  },
  {
    path: 'produto-cadastrar',
    component: ProdutoCadastarComponent,
    // canActivate: [AuthGuards]
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
