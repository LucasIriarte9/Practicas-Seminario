import { useState } from "react";
import { Boton } from "../components/Boton";

export const Calculadora = () => {
  const [data, setData]= useState({resultado:""})

  const escritura=(event)=>{
    if(data.resultado.length > 8) return
    setData({...data, resultado: `${data.resultado}`+ event.target.innerText });
  }

  const clear = ()=>{
    setData({resultado:""})
  }

  const resultadoCal = () =>{
    const resultado = eval(data.resultado)
    setData({...data, resultado})
  }

  return (
    <>
      <div className="flex justify-center">
        <span className="bg-black/60 text-white placeholder-white text-center py-4 px-28 max-w-28 ">{data.resultado}</span>
      </div>
      <div className="flex justify-center my-1">
        <div className="grid grid-cols-4 gap-0.5">
          <Boton texto="1" handleClick={escritura}/>
          <Boton texto="2" handleClick={escritura}/>
          <Boton texto="3" handleClick={escritura}/>
          <Boton texto="/" handleClick={escritura}/>
          <Boton texto="4" handleClick={escritura}/>
          <Boton texto="5" handleClick={escritura}/>
          <Boton texto="6" handleClick={escritura}/>
          <Boton texto="*" handleClick={escritura}/>
          <Boton texto="7" handleClick={escritura}/>
          <Boton texto="8" handleClick={escritura}/>
          <Boton texto="9" handleClick={escritura}/>
          <Boton texto="+" handleClick={escritura}/>
          <Boton texto="C" handleClick={clear}/>
          <Boton texto="0" handleClick={escritura}/>
          <Boton texto="=" handleClick={resultadoCal}/>
          <Boton texto="-" handleClick={escritura}/>
        </div>
      </div>
    </>
  );
};
