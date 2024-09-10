export const Boton = (params) => {
    const {texto, handleClick} = params;
  return (
    <button className="p-6 bg-slate-400" onClick={handleClick}>{texto}</button>
  )
}
