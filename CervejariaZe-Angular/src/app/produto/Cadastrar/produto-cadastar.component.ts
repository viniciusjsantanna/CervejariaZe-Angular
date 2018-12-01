import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-cadastar',
  templateUrl: './produto-cadastar.component.html',
  styleUrls: ['./produto-cadastar.component.css']
})
export class ProdutoCadastarComponent implements OnInit {

  public Tipo: Array<any> = [
    {id:1, tipo: 'Skol'},
    {id:2, tipo: 'Kaiser'}
  ];
  public file: any;
  public prodForm: FormGroup;

  constructor(private fb: FormBuilder, private produtoService:ProdutoService, private router: Router) {
    this.prodForm = this.fb.group({
      marca: ['', Validators.required],
      nome: ['',Validators.required],
      tipo: ['',Validators.required],
      codigo: ['',Validators.required],
      imagem: ['',Validators.required]
    });

  }

  ngOnInit() {
  }

  salvarProduto():void {
    const produto = this.prodForm.value;
    this.produtoService.Cadastrar(produto, this.file)
        .subscribe(res => {
            console.log(res);
         });
  }

  onFileChange($event):void { 
    this.file = $event.target.files[0];
  }

  Logout():void {
    // localStorage.clear();
    this.router.navigate(['/login']);
  }
}
