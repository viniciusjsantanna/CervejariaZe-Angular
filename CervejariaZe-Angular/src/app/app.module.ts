import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProdutoModule } from './produto/produto.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
