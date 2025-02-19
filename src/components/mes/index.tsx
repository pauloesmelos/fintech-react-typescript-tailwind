import MesBtn from './mes-btn';

const Mes = () => {
  return (
    <div className="flex items-center gap-5 pt-5">
        <MesBtn num={-3} />
        <MesBtn num={-2} />
        <MesBtn num={-1} />
        <MesBtn num={0} />
    </div>
  )
}

export default Mes;