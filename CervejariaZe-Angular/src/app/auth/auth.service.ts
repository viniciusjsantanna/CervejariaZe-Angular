import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  httpOptions: any;
  constructor(private http:HttpClient) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
   }

  public Autenticar(usuario): Observable<any>{
    const body = this.getParams(usuario);
    return this.http.post('http://localhost:55732/api/auth', body.toString(), this.httpOptions);
  }

  getParams(usuario){
    let params = new HttpParams()
    .set("Usuario", usuario.Usuario)
    .set("Senha", usuario.Senha);
    return params;
  }
}
