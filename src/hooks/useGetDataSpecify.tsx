import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Vendas } from "../types/Venda";

const URL_API = "https://www.data.origamid.dev/vendas";

const getDataSpecify = async (start: string, end: string): Promise<Array<Vendas>> => {
    return await axios.get(`${URL_API}?inicio=${start}&final=${end}`)
    .then(response => response.data)
    .catch(erro => console.log(erro));
}
const useGetDataSpecify = (start: string, end: string) => {
  const { data } = useQuery<Array<Vendas>>({
    queryKey: [`use-get-data-specify-${start}-${end}`],
    queryFn: () => getDataSpecify(start, end),
    enabled: !!start && !! end,
    refetchOnWindowFocus: false
  });

  return { data };
}

export default useGetDataSpecify;