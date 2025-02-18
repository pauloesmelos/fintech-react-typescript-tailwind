import { useState, useContext, PropsWithChildren, createContext, Dispatch, SetStateAction, useEffect } from 'react';
import useGetDataSpecify from '../../../hooks/useGetDataSpecify';
import { useInputGlobalContext } from '../input/InputGlobalContext';

type Status = "pago" | "processando" | "falha";
type Pagamento = "cartao" | "pix" | "boleto";
interface Venda {
    id: string,
    nome: string,
    preco: number,
    status: Status,
    pagamento: Pagamento,
    parcelas: number,
    data: string
}

interface VendaGlobalE {
    vendas: Array<Venda> | null,
    setVendas: Dispatch<SetStateAction<Array<Venda> | null>>
}

const VendasGlobalEspecifica = createContext<VendaGlobalE | null>(null);
export const VendasGlobalEspecificaProvider = ({ children }: PropsWithChildren) => {
  const { inicio, final } = useInputGlobalContext();
  const [vendas, setVendas] = useState<Array<Venda> | null>(null);
  const { data } = useGetDataSpecify(inicio, final);

  useEffect(() => {
    if(data) setVendas(data);
  }, [inicio,final, data]);
  return (
    <VendasGlobalEspecifica.Provider value={{ vendas, setVendas }}>
        {children}
    </VendasGlobalEspecifica.Provider>
  )
}

export const useVendaGlobalEspecifica = () => {
    const context = useContext(VendasGlobalEspecifica);
    if(context === null) throw new Error("Envolva o app sobre o Provider de VendaGlobalEspecifica");
    else return context;
}