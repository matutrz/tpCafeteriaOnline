import { useState } from "react";
import Form from "react-bootstrap/Form";

function Buscador({ onFiltrar }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onFiltrar(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex align-items-center" style={{ maxWidth: "320px" }}>
      <Form.Control
        type="search"
        placeholder="Buscar producto..."
        className="me-2"
        aria-label="Buscar"
        value={query}
        onChange={handleChange}
      />
    </Form>
  );
}

export default Buscador;
