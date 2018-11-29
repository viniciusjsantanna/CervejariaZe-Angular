import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  authForm: FormGroup;


  constructor(private fb:FormBuilder, private authService:AuthService, private router: Router) { 
    this.authForm = this.fb.group({
      Usuario: ['', Validators.required],
      Senha: ['', Validators.required]
    });

  }

  public Autenticar():void{
    const usuarioLogado = this.authForm.value;
    this.router.navigate(['/produto']);
    // this.authService.Autenticar(usuarioLogado).subscribe(
    //   res =>{
    //     console.log(res);
    //   }
    // )
  }

}
