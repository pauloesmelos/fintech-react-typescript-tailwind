import { FormEventHandler } from "react";
import Input from "../form/input";
//import { useGlobalContextVendas } from "../global/context-vendas/VendasGlobalContext";
import { useInputGlobalContext } from "../global/input/InputGlobalContext";
import Mes from "../mes";
//import { useVendaGlobalEspecifica } from "../global/context-venda-especifica/VendasGlobalEspecifica";

const Header = () => {
  const inputGlobal = useInputGlobalContext();
  //const { vendas } = useGlobalContextVendas();
  //const vendaEspecifica = useVendaGlobalEspecifica();
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  }

  return (
    <div className="w-full">
      <div className="w-full max-w-[1400px] mx-auto px-5">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <form className="flex items-center gap-4" onSubmit={handleSubmit}>
            <Input 
              label="Inicio" 
              type="date" 
              id="inicio" 
              value={inputGlobal?.inicio} 
              onChange={({ target }) => inputGlobal?.setInicio(target.value)}
            />
            <Input 
              label="Final" 
              type="date" 
              id="final" 
              value={inputGlobal?.final} 
              onChange={({ target }) => inputGlobal?.setFinal(target.value)}
            />
          </form>
        </div>
        <div>
          <Mes />
        </div>
      </div>
    </div>
  )
}

export default Header;