import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  cards:Array<any> = [
    {titulo: 'SKOL', marca: 'Kaiser', tipo: 'Lager'},
    {titulo: 'Brahma', marca: 'Kaiser', tipo: 'Lager'},
    {titulo: 'Cachaça', marca: '51', tipo: 'Cana'},
  ]

  constructor(private produtoService: ProdutoService, private router:Router) {
    this.Listar();
   }

  ngOnInit() {
    
  }

  public Listar(): void{
    this.produtoService.Listar().subscribe(
      data => {
        console.log(data);
      }
    );
  }

  Logout():void {
    // localStorage.clear();
    this.router.navigate(['/login']);
  }
}
