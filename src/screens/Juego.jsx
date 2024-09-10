import { useState } from "react"
import confetti from "canvas-confetti";

export const Juego = () => {
  const [inputValue, setInputValue] = useState(0);
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);

  const handleNumeroAleatorio = () => {
    setNumeroAleatorio(Math.floor(Math.random()*3)+1);
    if(inputValue === numeroAleatorio){
      confetti();
    }else{
      return;
    }
  } 

  const handleInput = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div className="flex justify-center my-8 text-3xl">
        <h2>Adivina el numero</h2>
      </div>
      <div className="flex justify-center">
        <input onChange={handleInput} type="number" placeholder="Entre su numero" className="bg-blue-600 p-4 placeholder-white" />
      </div>
      <div className="flex justify-center">
        <button onClick={handleNumeroAleatorio} className="bg-blue-600 p-4 placeholder-white m-6 text-white">Adivinar</button>
      </div>
      <div className="flex justify-center text-2xl font-bold my-2">
        <span>Tu numero es: {inputValue}</span>
      </div>
      <div className="flex justify-center text-2xl font-bold m-2">
        <span>El numero a adivinar era: {numeroAleatorio}</span>
      </div>
    </>   
  )
}
