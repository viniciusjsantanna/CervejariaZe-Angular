import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


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

  public prodForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.prodForm = this.fb.group({
      marca: [''],
      nome: [''],
      tipo: [''],
      codigo: [''],
      imagem: ['']
    });

  }

  ngOnInit() {
  }

  salvarProduto():void{
    const produto = this.prodForm.value;
    console.log(produto);
  }

  onFileChange($event) {
    let file = $event.target.files[0]; // <--- File Object for future use.
    console.log(file);
    // this.prodForm.controls['imageInput'].setValue(file ? file.name : ''); // <-- Set Value for Validation
  }
}
