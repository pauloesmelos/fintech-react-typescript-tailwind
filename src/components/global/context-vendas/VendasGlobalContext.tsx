import { createContext, PropsWithChildren, useState, Dispatch, SetStateAction, useEffect, useContext } from "react";
import useGetData from "../../../hooks/useGetData";

type Pagamento = "boleto" | "cartao" | "pix";
type Status = "processando" | "pago" | "falha";

interface Vendas {
    id: string,
    nome: string,
    preco: number,
    status: Status,
    pagamento: Pagamento,
    parcelas: number,
    data: string
}
interface VendasGlobalC {
    vendas: Array<Vendas> | null,
    setVendas: Dispatch<SetStateAction<Array<Vendas> | null>>
}

const VendasGlobalContext = createContext<VendasGlobalC | null>(null);
export const VendasGlobalContextProvider = ({ children }: PropsWithChildren) => {
  const URL_DATA = "https://www.data.origamid.dev/vendas";
  const [vendas, setVendas] = useState<Array<Vendas> | null>(null);
  const { data } = useGetData(URL_DATA);

  useEffect(() => { 
    if(data) setVendas(data); // Garantir que nunca seja undefined
  }, [data]);

  return (
    <VendasGlobalContext.Provider value={{ vendas, setVendas }}>
        {children}
    </VendasGlobalContext.Provider>
  )
}

export const useGlobalContextVendas = () => {
    const context = useContext(VendasGlobalContext);
    if(context === null) {
        throw new Error("Envolva a aplicação sobre o provedor do contexto VendasGlobalContext");
    }
    else return context;
}