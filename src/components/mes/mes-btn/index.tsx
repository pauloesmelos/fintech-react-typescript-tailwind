import { useInputGlobalContext } from "../../global/input/InputGlobalContext";

interface MesBtnProps {
    num: number;
}
const MesBtn = ({ num }: MesBtnProps) => {
  const { setInicio, setFinal } = useInputGlobalContext();

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}-${month <= 9 ? "0" : ""}${month + 1}-${day <= 9 ? "0" : ""}${day}`;
  }
  const getDates = (num: number) => {
    const date = new Date();
    date.setMonth(num + 1);
    const dateName = Intl.DateTimeFormat("pt-BR", {
      month: "long",
    }).format(date);
    return dateName.toString().replace(dateName.toString()[0], dateName.toString()[0].toUpperCase());
  }
  const setDates = (value: number) => { // value 0 = mes atual -1 = mes passado
    const date = new Date();
    date.setMonth(date.getMonth() + value);
    const firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1); // yyyy-mm-dd
    const lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0); // pega o último dia do mês
    setInicio(formatDate(firstDayMonth));
    setFinal(formatDate(lastDayMonth));
  }

  return (
    <div>
      <button onClick={() => setDates(num)} className="px-6 py-2 bg-marrom-claro marrom font-medium rounded-md cursor-pointer
      hover:opacity-50 duration-300">
        {getDates(num)}
      </button>        
    </div>
  )
}

export default MesBtn;