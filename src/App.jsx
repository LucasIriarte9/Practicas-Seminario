import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import GaleriaImagenes from './components/galeria-imagenes'
import { Calculadora } from './screens/calculadora'
import { Todo } from './screens/todo'
import { Juego } from './screens/juego'
import { Nav } from './components/nav'

function App() {

  return (
    <>
    <h1 className=' flex justify-center font-bold text-5xl'>Practicas Seminario</h1>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<GaleriaImagenes/>}/>
        <Route path="/calculadora" element={<Calculadora/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/juego" element={<Juego/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
