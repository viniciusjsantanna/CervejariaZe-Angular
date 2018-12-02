import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import { Router } from '@angular/router';
import { ProdutoDTO } from '../models/produto.models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  listaProduto: Array<ProdutoDTO>;
  filterForm: FormGroup;

  constructor(private produtoService: ProdutoService, private router:Router, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      filtro: ['']
    });
  }

  ngOnInit() {
    this.Listar();
    
  }

  public Listar(): void{
    this.produtoService.Listar().subscribe(
      data => {
        this.listaProduto = data;
      }
    );
  }

  public Filtrar(): void{
    var obj = this.filterForm.value;
    this.produtoService.Filtrar(obj.filtro).subscribe(
      data => {
        this.listaProduto = data;
      }
    );
  }

  Logout():void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
