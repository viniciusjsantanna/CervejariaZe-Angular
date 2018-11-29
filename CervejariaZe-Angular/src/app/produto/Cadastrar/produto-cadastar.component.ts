import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-cadastar',
  templateUrl: './produto-cadastar.component.html',
  styleUrls: ['./produto-cadastar.component.css']
})
export class ProdutoCadastarComponent implements OnInit {

  public Tipo: Array<any> = [
    {id:1, tipo: 'Skol'},
    {id:1, tipo: 'Kaiser'}
  ];
  public file: any;
  public prodForm: FormGroup;

  constructor(private fb: FormBuilder, private produtoService:ProdutoService) {
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

  salvarProduto():void{
    const produto = this.prodForm.value;
    produto.imagem = this.file;
    this.produtoService.Cadastrar(produto).subscribe(res => {
      console.log(res);
    });
  }

  onFileChange($event) {
    this.file = $event.target.files[0];
  }
}
