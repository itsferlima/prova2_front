import { FormaPagamento } from "./forma.pagamento";
import { ItemVenda } from "./item-venda";

export interface Venda {
    VendaId?: number;
    Cliente: string;
    FormaPagamento?: FormaPagamento;
    Itens: ItemVenda[];
    CriadoEm?: Date;
    ValorTotal?: number;
    FormaPagamentoId?: number;
}