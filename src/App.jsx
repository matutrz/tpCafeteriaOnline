import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactForm from './components/ContactForm.jsx'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      <Routes>
        <Route
          path="/contacto"
          element={
            <ContactForm />
          }
        />
      </Routes>
    </Router>
  );
}

export default App
