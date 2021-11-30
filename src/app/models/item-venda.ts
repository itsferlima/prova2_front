import { Produto } from "./produto";

export interface ItemVenda {
    itemVendaId?: number;
    produto: Produto;
    produtoId: number;
    preco: number;
    quantidade: number;
    carrinhoId: string;
    criadoEm?: Date;
}