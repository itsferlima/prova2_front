import { Component, OnInit, SystemJsNgModuleLoader } from "@angular/core";
import { FormaPagamento } from "src/app/models/forma.pagamento";
import { ItemVenda } from "src/app/models/item-venda";
import { FormaPagamentoService } from "src/app/services/forma.pagamento.service";
import { ItemService } from "src/app/services/item.service";
import { VendaService } from "src/app/services/venda.service";
import { Venda } from "src/app/models/venda";

@Component({
    selector: "app-carrinho",
    templateUrl: "./carrinho.component.html",
    styleUrls: ["./carrinho.component.css"],
})
export class CarrinhoComponent implements OnInit {
    itens: ItemVenda[] = [];
    cliente: string = "";
    formasPagamento: FormaPagamento[] = [];
    formaPagamentoId!: number;
    colunasExibidas: String[] = ["nome", "preco", "quantidade", "imagem"];
    valorTotal!: number;
    constructor(
        private itemService: ItemService,
        private formaPagamentoService: FormaPagamentoService,
        private vendaService: VendaService
    ) { }

    ngOnInit(): void {
        let carrinhoId = localStorage.getItem("carrinhoId")! || "";
        this.itemService.getByCartId(carrinhoId).subscribe((itens) => {
            this.itens = itens;
            this.valorTotal = this.itens.reduce((total, item) => {
                return total + item.preco * item.quantidade;
            }, 0);
        });
        this.formaPagamentoService.list().subscribe((formasPagamento) => {
            this.formasPagamento = formasPagamento;
        });
    }
    finalizar(): void {
        const MapedItens = this.itens.map(
            (item) =>
                <ItemVenda>{
                    produtoId: item.produtoId,
                    quantidade: item.quantidade,
                    preco: item.preco,
                    carrinhoId: item.carrinhoId,
                }
        );
        const venda: Venda = {
            Cliente: this.cliente,
            Itens: MapedItens,
            FormaPagamentoId: this.formaPagamentoId,
        };
        venda.FormaPagamentoId = this.formaPagamentoId;
        this.vendaService.create(venda).subscribe((venda) => {


            this.itens = [];
            this.cliente = "";
            this.formaPagamentoId = 0;

        }, (error) => {
            alert("Erro: " + error.error)
            console.log(error);
        })
    }
}
