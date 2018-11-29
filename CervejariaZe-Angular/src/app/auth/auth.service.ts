import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  httpOptions: any;
  constructor(private http:HttpClient) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded',
        })
      };

   }

  
  
  public Autenticar(usuario): Observable<any>{
      console.log(usuario);
      return this.http.post<any>('http://localhost:55732/api/auth', JSON.stringify(usuario), this.httpOptions);
  }
}
