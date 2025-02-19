import { useState, FormEventHandler, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Input from "../form/input";
import { useInputGlobalContext } from "../global/input/InputGlobalContext";
import Mes from "../mes";
import Helmet from "../helmet";

const Header = () => {
  const location = useLocation();
  const [title, setTitle] = useState("Resumo");
  const inputGlobal = useInputGlobalContext();
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    if(location.pathname === "/vendas") 
      setTitle("Vendas");
    else if(location.pathname === "/")
      setTitle("Resumo");
  }, [location]);

  return (
    <div className="w-full">
      <Helmet title={`Fintech - ${title}`} description={`Página de ${title} do site Fintech.`} />
      <div className="w-full max-w-[1400px] mx-auto  py-3 px-5">
        <div className="flex items-center gap-6">
          <div className="w-full p-4 bg-white rounded-lg shadow-lg border border-neutral-200">
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
          <div className="w-full p-4 bg-marrom-claro shadow-lg">
            <h1 className="text-4xl font-bold marrom">
              {title}
            </h1>
          </div>
        </div>
        <div>
          <Mes />
        </div>
      </div>
    </div>
  )
}

export default Header;