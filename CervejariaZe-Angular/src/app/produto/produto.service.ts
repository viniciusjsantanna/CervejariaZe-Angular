import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map'

@Injectable()
export class ProdutoService {
  
  httpOptions: any;

  constructor(private http:HttpClient) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded',
        })
      };
   }

  public Cadastrar(produto): any{
      return this.http.post<any>('http://localhost:55732/api/produto', JSON.stringify(produto), this.httpOptions);
  }

  public Listar(): Observable<any>{
    return this.http.get('http://localhost:55732/api/produto', this.httpOptions);
  }
}
