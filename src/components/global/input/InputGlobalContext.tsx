import { useContext, createContext, PropsWithChildren, Dispatch, SetStateAction, useState } from "react";

interface InputGlobal {
    inicio: string,
    setInicio: Dispatch<SetStateAction<string>>,
    final: string,
    setFinal: Dispatch<SetStateAction<string>>
}
const getDatePopule = (range: number): string => { // já inicia a aplicação com dados populados de 15 dias atrás
    const date = new Date();
    date.setDate(date.getDate() - range);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    return `${year}-${month <= 9 ? "0" : ""}${month}-${day <= 9 ? "0" : ""}${day}`;
}
const InputGlobalContext = createContext<InputGlobal | null>(null);
export const InputGlobalContextProvider = ({ children}: PropsWithChildren) => {
  const [inicio, setInicio] = useState(getDatePopule(15));
  const [final, setFinal] = useState(getDatePopule(0));
  
  return (
    <InputGlobalContext.Provider value={{ inicio, setInicio, final, setFinal }}>
        {children}
    </InputGlobalContext.Provider>
  )
}
export const useInputGlobalContext = () => {
    const contexto = useContext(InputGlobalContext);
    if(!contexto) throw new Error ("Envolva a app sobre o provider");
    else return contexto;
}