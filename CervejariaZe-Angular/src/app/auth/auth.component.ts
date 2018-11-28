import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  authForm: FormGroup;


  constructor(private fb:FormBuilder) { 
    this.authForm = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });

  }

  public Autenticar():void{
    const usuarioLogado = this.authForm.value;
    console.log(usuarioLogado);
  }

}
