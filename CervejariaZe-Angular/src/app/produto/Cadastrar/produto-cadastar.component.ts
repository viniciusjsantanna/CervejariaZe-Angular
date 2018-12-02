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

  public message:String;
  public show:Boolean;
  public Tipo: Array<any> = [
    {id:1, tipo: 'Lager'},
    {id:2, tipo: 'Pilsen'},
    {id:3, tipo: 'Bock'},
    {id:4, tipo: 'Ale'}
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
    this.show = false;
  }

  ngOnInit() {
  }

  salvarProduto():void {
    const produto = this.prodForm.value;
    this.produtoService.Cadastrar(produto, this.file)
        .subscribe(res => {
          this.router.navigate(['/produto']);
        
         });
  }

  return(){
    setTimeout(()=> {  
        this.show = false;
        this.router.navigate(['/produto']);
    }, 1500);
  }
  onFileChange($event):void { 
    this.file = $event.target.files[0];
  }

  Logout():void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
