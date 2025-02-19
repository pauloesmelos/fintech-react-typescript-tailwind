import { useParams } from "react-router-dom";
import useGetDataById from "../../hooks/useGetDataById";
import { useEffect } from "react";
import { useVendasById } from "../../components/global/context-venda-by-id/VendasByIdGlobalContext";

const Venda = () => {
  const { id } = useParams();
  const { data } = useGetDataById(id ? id : "");
  const { setVenda } = useVendasById();
  useEffect(() => {
    if(data) setVenda(data);
  }, [data]);
  
  return (
    <div className="w-full pt-5">
        <div className="w-full px-5">
            <div className="w-full">
                <h1>
                    {data?.nome}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Venda;