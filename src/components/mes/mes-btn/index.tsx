
interface MesBtnProps {
    num: number;
}
const MesBtn = ({ num }: MesBtnProps) => {
  //const { setInicio, setFinal } = useInputGlobalContext();
  //console.log(setInicio, setFinal);

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
    
  }

  return (
    <div>
      <button onClick={() => setDates(num)} className="px-6 py-2 bg-marrom-claro marrom font-medium rounded-md cursor-pointer">
        {getDates(num)}
      </button>        
    </div>
  )
}

export default MesBtn;