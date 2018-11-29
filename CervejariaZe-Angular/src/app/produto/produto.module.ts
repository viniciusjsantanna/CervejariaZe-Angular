import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { ProdutoCadastarComponent } from './Cadastrar/produto-cadastar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ProdutoService } from './produto.service';
import 'materialize-css';
import { MaterializeModule } from "angular2-materialize";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProdutoComponent, ProdutoCadastarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterializeModule,
    RouterModule
  ],
  providers: [
    ProdutoService   
  ]
})
export class ProdutoModule { }
