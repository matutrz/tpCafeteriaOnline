import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import productos from "../data/fakeBackend";
import { motion } from "motion/react";

function Buscador({ agregarProducto }) {
  const [query, setQuery] = useState("");

  const resultados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="mx-auto w-100 w-lg-auto">
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          type="search"
          placeholder="Buscar Producto"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          className="w-100"
          style={{ minWidth: "120px" }}
        />
      </Form>
      {query && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "white",
            zIndex: 1000,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            maxHeight: "250px",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {resultados.map((p) => (
            <div
              key={p.id}
              className="d-flex justify-content-between align-items-center p-2 border-bottom"
            >
              <div
                className="d-flex align-items-center"
                style={{ minWidth: 0, flex: 1 }}
              >
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    marginRight: "10px",
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minWidth: 0,
                    alignItems: "flex-start", // <-- Alinea todo a la izquierda
                  }}
                >
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "1rem",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                      lineHeight: 1.1,
                      textAlign: "left", // <-- Alinea el texto a la izquierda
                      width: "100%",
                    }}
                  >
                    {p.nombre}
                  </span>
                  <span
                    style={{
                      color: "#555",
                      fontSize: "0.95rem",
                      textAlign: "left", // <-- Alinea el precio a la izquierda
                      width: "100%",
                    }}
                  >
                    ${p.precio}
                  </span>
                </div>
              </div>
              <motion.Button
                size="sm"
                onClick={() => {
                  agregarProducto(p);
                  setQuery("");
                }}
                style={{ flexShrink: 0, marginLeft: "10px",
                  borderRadius: "8px", padding: "2px", backgroundColor: "#D2946D" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Agregar
              </motion.Button>
            </div>
          ))}
          {resultados.length === 0 && (
            <div className="p-2 text-muted">Sin resultados</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Buscador;
