import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    intercept(request:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
        let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
        if(usuarioLogado && usuarioLogado.Token){
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${usuarioLogado.Token}`
                }
            });
        }
        return next.handle(request);
    }
}