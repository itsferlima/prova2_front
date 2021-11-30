import { Categoria } from "./categoria";

export interface Produto{
    produtoId?: number;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
    categoriaId:number;
    categoria?: Categoria;
    criadoEm?: string;

}