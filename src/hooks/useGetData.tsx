import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Vendas } from "../types/Venda";

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