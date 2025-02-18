import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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

const getData = async (url: string): Promise<Array<Vendas>> => {
    return await axios.get(`${url}`)
    .then(response => response.data)
    .catch(erro => console.log(erro));
}
const useGetData = (url: string) => {
  const { data, isLoading } = useQuery<Array<Vendas>>({
    queryKey: ["get-all-data"],
    queryFn: () => getData(url),
    enabled: !!url,
    refetchOnWindowFocus: false
  })
  return { data, isLoading };
}

export default useGetData;