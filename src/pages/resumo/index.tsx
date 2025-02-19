import { useInputGlobalContext } from "../../components/global/input/InputGlobalContext";
import useGetDataSpecify from "../../hooks/useGetDataSpecify";

const Resumo = () => {
  const { inicio, final } = useInputGlobalContext();
  const { data } = useGetDataSpecify(inicio, final);

  return (
    <div className="w-full pt-10">
      <div className="w-full max-w-[1400px] mx-auto py-3 px-5">
        <div className="w-full flex items-center gap-6">
          <div className="flex flex-col gap-4 w-1/2 px-4 py-8 bg-white shadow-marrom border-2 border-neutral-100 rounded-lg
          duration-500">
            <h1 className="marrom font-bold text-4xl">
              Vendas
            </h1>
            <span className="text-[#66593c] font-bold text-2xl">
              {data?.reduce((venda, actuaValue) => {
                return venda + actuaValue.preco
              }, 0).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </span>
          </div>
          <div className="flex flex-col gap-4 w-1/2 px-4 py-8 bg-white shadow-marrom border-2 border-neutral-100 rounded-lg
          duration-500">
            <h1 className="marrom font-bold text-4xl">
              Recebido
            </h1>
            <span className="text-[#66593c] font-bold text-2xl">
              {data?.filter(venda => venda.status !== "falha").reduce((venda, actuaValue) => {
                return venda + actuaValue.preco
              }, 0).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </span>
          </div>
          <div className="flex flex-col gap-4 w-1/2 px-4 py-8 bg-white shadow-marrom border-2 border-neutral-100 rounded-lg
          duration-500">
            <h1 className="marrom font-bold text-4xl">
              Processado
            </h1>
            <span className="text-[#66593c] font-bold text-2xl">
              {data?.filter(venda => venda.status === "processando").reduce((venda, actuaValue) => {
                return venda + actuaValue.preco
              }, 0).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full px-4 py-8 bg-white shadow-marrom border-2 border-neutral-100 rounded-lg
        mt-5">
            <h1 className="marrom font-bold text-4xl">
              Gráficos
            </h1>
        </div>
      </div>
    </div>
  )
}

export default Resumo;