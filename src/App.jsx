import './App.css'
import Header from './components/Header'
import Contacto from './pages/Contacto'
import Carta from './pages/Carta'
import Carrito from './pages/Carrito'
import Inicio from './pages/Inicio'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>

      <Header/>
        <Routes>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path="/Carta" element={<Carta/>}/>
          <Route path="/Carrito" element={<Carrito/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>

    </>
  )
}

export default App
