import { useInputGlobalContext } from "../../components/global/input/InputGlobalContext";
import VendaItem from "../../components/venda-item";
import useGetDataSpecify from "../../hooks/useGetDataSpecify";

const Vendas = () => {
  const { inicio, final } = useInputGlobalContext();
  const { data } = useGetDataSpecify(inicio, final);
  
  return (
    <div className="w-full pt-12">
        <div className="w-full max-w-[1400px] mx-auto px-5">
            <div className="w-full">
                <h1 className="font-bold text-4xl marrom">Lista</h1>
                <div className="w-full flex flex-col gap-4 mt-5">
                    {data?.map((venda) => (
                        <VendaItem key={venda.id} {...venda} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vendas;