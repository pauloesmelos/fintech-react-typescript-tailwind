import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Vendas } from "../types/Venda";

const URL_API = "https://www.data.origamid.dev/vendas";

const getDataById = async (id: string | undefined): Promise<Vendas> => {
    return await axios.get(`${URL_API}/${id}`)
    .then(response => response.data)
    .catch(erro => console.log(erro))
}
const useGetDataById = (id: string) => {
  const { data } = useQuery<Vendas>({
    queryKey: [`use-get-data-by-id-${id}`],
    queryFn: () => getDataById(id),
    enabled: !!id,
    refetchOnWindowFocus: false
  })
  return { data };
}

export default useGetDataById;