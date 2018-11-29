import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  cards:Array<any> = [
    {titulo: 'SKOL', marca: 'Kaiser', tipo: 'Lager'},
    {titulo: 'Brahma', marca: 'Kaiser', tipo: 'Lager'},
  ]

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.Listar();
  }

  public Listar(): void{
    this.produtoService.Listar();
  }
}
