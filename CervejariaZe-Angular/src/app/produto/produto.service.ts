import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProdutoDTO } from '../models/produto.models';
import {
  map
} from "rxjs/operators";

@Injectable()
export class ProdutoService {
  
  httpOptions: any;

  constructor(private http:HttpClient) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
        })
      };
   }

  public Cadastrar(produto, file): any{
    var formData = new FormData();
    formData.append("File", file);
    formData.append("produto", produto);
    return this.http.post('http://localhost:55732/api/produto', formData, this.httpOptions);
  }

  public Listar(){
    return this.http.get<ProdutoDTO[]>('http://localhost:55732/api/produto').pipe(
      map((res: any) => {
        return res.results;
      })
    );;
  }

}
