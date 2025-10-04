import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import productos from "../data/fakeBackend";

function Buscador({ agregarProducto }) {
  const [query, setQuery] = useState("");

  const resultados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <Form onSubmit={(e) => e.preventDefault()} style={{ position: "relative" }}>
      <Form.Control
        type="search"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query &&
        resultados.map((p) => (
          <div
            key={p.id}
            className="d-flex justify-content-between align-items-center p-2 border mb-1 rounded"
            style={{ background: "white", zIndex: 1000 }}
          >
            <span>
              {p.nombre} - ${p.precio}
            </span>
            <Button
              size="sm"
              onClick={() => {
                agregarProducto(p); 
                setQuery("");       
              }}
            >
              Agregar
            </Button>
          </div>
        ))}
    </Form>
  );
}

export default Buscador;