import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProdutoDTO } from '../models/produto.models';
import {
  map
} from "rxjs/operators";

@Injectable()
export class ProdutoService {
  
  constructor(private http:HttpClient) {}

  public Cadastrar(produto, file): any{
    var formData = new FormData();
    formData.append("File", file);
    formData.append("produto", JSON.stringify(produto));
    return this.http.post('http://localhost:55732/api/produto', formData);
  }

  public Listar(){
    return this.http.get<ProdutoDTO[]>('http://localhost:55732/api/produto').pipe(
      map((res: any) => res));
  }

  public Filtrar(filtro: string){
    return this.http.get<ProdutoDTO[]>('http://localhost:55732/api/produto/filtro?'+'filtro='+filtro);
  }

}
