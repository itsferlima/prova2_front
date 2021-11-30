import { ItemService } from './../../../../services/item.service';
import { ProdutoService } from './../../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { Router } from '@angular/router';
import { ItemVenda } from 'src/app/models/item-venda';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  produtos: Produto[]=[];

  constructor(private router: Router, private ProdutoService: ProdutoService, private ItemService: ItemService) { }

  ngOnInit(): void {
    this.ProdutoService.list().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  adicionar(produto: Produto): void {
    let item: ItemVenda = {
        produto: produto,
        produtoId: produto.produtoId!,
        quantidade: 1,
        preco: produto.preco,
        carrinhoId: localStorage.getItem("carrinhoId")! || "",
    };
    this.ItemService.create(item).subscribe((item) => {
        localStorage.setItem("carrinhoId", item.carrinhoId);
        this.router.navigate(["home/carrinho"]);
    });
}

}
