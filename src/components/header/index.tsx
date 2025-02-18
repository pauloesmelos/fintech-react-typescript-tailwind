import { FormEventHandler } from "react";
import Input from "../form/input";
import { useGlobalContextVendas } from "../global/context-vendas/VendasGlobalContext";

const Header = () => {
  const { vendas } = useGlobalContextVendas();
  console.log(vendas);
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  }

  return (
    <div className="w-full">
      <div className="w-full max-w-[1400px] mx-auto px-5">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <form className="flex items-center gap-4" onSubmit={handleSubmit}>
            <Input label="Inicio" type="date" id="inicio" />
            <Input label="Final" type="date" id="final" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header;