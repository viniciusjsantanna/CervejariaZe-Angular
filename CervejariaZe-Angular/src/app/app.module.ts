import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProdutoModule } from './produto/produto.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.Interceptor';
import { AuthGuards } from './guards/auth.guards';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutoModule,
    AuthModule,
  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    AuthGuards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
