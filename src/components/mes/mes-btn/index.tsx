interface MesBtnProps {
    num: number;
}
const MesBtn = ({ num }: MesBtnProps) => {
  const getDates = (num: number) => {
    const date = new Date();
    date.setMonth(num + 1);
    const dateName = Intl.DateTimeFormat("pt-BR", {
      month: "long",
    }).format(date);
    console.log(dateName);
  }
  getDates(num);
  return (
    <div>
        
    </div>
  )
}

export default MesBtn;