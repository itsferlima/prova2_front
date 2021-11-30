import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Produto } from 'src/app/models/produto';
import { CategoriaService } from 'src/app/services/categoria-service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.css']
})
export class ProdutoCadastrarComponent implements OnInit {
  nome!: string;
  descricao!: string;
  quantidade!: number;
  preco!: number;
  categorias!: Categoria[];
  categoriaId!: number;

  constructor(private router: Router, private produtoService: ProdutoService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  this.categoriaService.list().subscribe((categorias) => {
    this.categorias = categorias;
    });
  }

  cadastrar(): void {
    let produto: Produto = {
        nome: this.nome,
        descricao: this.descricao,
        quantidade: this.quantidade,
        preco: this.preco,
        categoriaId: this.categoriaId,
    };
    this.produtoService.create(produto).subscribe((produto) => {
        console.log(produto);
        this.router.navigate(["produto/listar"]);
    });
  }
}
