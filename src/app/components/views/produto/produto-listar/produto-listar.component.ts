import { ProdutoService } from './../../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit {
  produtos: Produto[] = [];
  colunasExibidas: String[] = [
    "id",
    "nome",
    "descricao",
    "quantidade",
    "preco",
    "categoria",

    ];
  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.service.list().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }
}
