import { NavLink } from "react-router-dom";
import { Vendas } from "../../types/Venda";

const VendaItem = ({ id, nome, preco }: Vendas) => {

  return (
    <NavLink
    to={`/vendas/${id}`}
    className="flex items-center gap-16 last p-8 bg-white text-[#66593c] shadow-md border-2 border-neutral-100
    shadow-marrom rounded-xl">
        <p className="text-2xl font-semibold">
            {id}
        </p>
        <p className="text-2xl font-semibold">
            {nome}
        </p>
        <p className="text-2xl font-semibold ml-auto">
            {preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}
        </p>
    </NavLink>
  )
}

export default VendaItem;