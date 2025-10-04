import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import productos from "../data/fakeBackend";

function Buscador({ onFiltrar, agregarProducto }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onFiltrar(value);
  };

  const handleSubmit = (e) => e.preventDefault(); // evita recargar la página

  const resultados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <Form onSubmit={handleSubmit} style={{ position: "relative" }}>
      <Form.Control
        type="search"
        placeholder="Buscar..."
        value={query}
        onChange={handleChange}
        className="mb-2"
      />

      {query && resultados.map((p) => (
        <div
          key={p.id}
          className="d-flex justify-content-between align-items-center p-2 border mb-1 rounded"
          style={{ background: "white", zIndex: 1000 }}
        >
          <span>{p.nombre} - ${p.precio}</span>
          <Button
            size="sm"
            onClick={() => {
              agregarProducto(p);
              setQuery("");      
              onFiltrar("");     
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