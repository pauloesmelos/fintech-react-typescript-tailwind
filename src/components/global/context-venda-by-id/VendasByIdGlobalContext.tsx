import { createContext, PropsWithChildren, useState, Dispatch, SetStateAction, useContext } from "react";
import { Vendas } from "../../../types/Venda";

interface PropsVendaById {
    venda: Vendas | null,
    setVenda: Dispatch<SetStateAction<Vendas | null>>
}
const VendasByIdGlobalContext = createContext<PropsVendaById | null>(null);
export const VendasByIdGlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [venda, setVenda] = useState<Vendas | null>(null);
  
  return (
    <VendasByIdGlobalContext.Provider value={{ venda, setVenda }}>
        {children}
    </VendasByIdGlobalContext.Provider>
  )
}

export const useVendasById = () => {
    const context = useContext(VendasByIdGlobalContext);
    if(!context) throw new Error("Envolve o app sobre o provider VendasByIdGlobalContextProvider");
    else return context;
}