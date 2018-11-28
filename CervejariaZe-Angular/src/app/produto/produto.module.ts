import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { ProdutoCadastarComponent } from './Cadastrar/produto-cadastar/produto-cadastar.component';

import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProdutoComponent, ProdutoCadastarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProdutoModule { }
