import { useState } from "react";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const handleAgregar = () => {
    setTareas([...tareas, inputValue]);
    setInputValue("");
  };
  const handleEliminar = (index) => {
    const newTask = tareas.filter((_, i) => i !== index);
    setTareas(newTask);
  };

  return (
    <>
      <div className="flex justify-center">
        <input
          value={inputValue}
          onChange={handleInputValue}
          type="text"
          placeholder="Ingesa tu tarea"
          className="px-14 py-4 placeholder-white bg-blue-700 text-center text-3xl text-white"
        />
        <button
          onClick={handleAgregar}
          className="mx-4 px-4 text-2xl text-white bg-red-500"
        >
          Agregar
        </button>
      </div>
      <div className="flex flex-col items-center my-8 text-4xl gap-4">
        {tareas.map((tarea,index) => {
          return (
            <span key={index}>
              - {tarea}
              <button
                onClick={() => handleEliminar(index)}
                className="text-white bg-red-700 p-1"
              >
                X
              </button>
            </span>
          );
        })}
      </div>
    </>
  );
};
