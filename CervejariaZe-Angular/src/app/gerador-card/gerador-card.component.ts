import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gerador-card',
  templateUrl: './gerador-card.component.html',
  styleUrls: ['./gerador-card.component.css']
})
export class GeradorCardComponent implements OnInit {
  @Input()
  marca: string;
  @Input()
  titulo: string;
  @Input()
  codigo: string;
  @Input()
  tipo: string;
  @Input()
  imagem: string;

  constructor() { }

  ngOnInit() {
    console.log(this.marca);
  }

}
