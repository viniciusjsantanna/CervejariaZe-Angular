import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
      // const body = this.getParams(produto);
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    var formData = new FormData();
    formData.append("File", JSON.stringify(produto.imagem));
    formData.append("produto", produto);
    formData.set("file", produto.imagem);
    // xhr.open('POST', 'http://localhost:55732/api/produto', true);
    // xhr.send(formData);
    return this.http.post('http://localhost:55732/api/produto', formData, this.httpOptions);
  }

  public Listar(): Observable<any>{
    return this.http.post('http://localhost:55732/api/produto/listar', new HttpParams(), this.httpOptions);
  }


  getParams(produto){
    let params = new HttpParams()
    .set("Marca", produto.marca)
    .set("Nome", produto.nome)
    .set("Codigo", produto.codigo)
    .set("Tipo", produto.tipo);
    
    return params;
  }

  getFormdata(produto){
    var formData = new FormData();
    formData.append("File", produto.imagem);
  }
}
