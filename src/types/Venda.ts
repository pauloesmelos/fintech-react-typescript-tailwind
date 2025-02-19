type Pagamento = "boleto" | "cartao" | "pix";
type Status = "processando" | "pago" | "falha";

export interface Vendas {
    id: string,
    nome: string,
    preco: number,
    status: Status,
    pagamento: Pagamento,
    parcelas: number,
    data: string
}