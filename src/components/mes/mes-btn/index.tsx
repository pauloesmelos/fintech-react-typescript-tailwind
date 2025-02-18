interface MesBtnProps {
    num: number;
}
const MesBtn = ({ num }: MesBtnProps) => {
  const getDates = (num: number) => {
    const date = new Date();
    console.log(date.getDate() + num);
  }
  getDates(num);
  return (
    <div>
        
    </div>
  )
}

export default MesBtn;