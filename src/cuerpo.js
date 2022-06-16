import React from "react";
import comidas4 from "./assets/images/comidas4.jpg";
import farmacia from "./assets/images/farmacia.jpg";
import { Card } from "./Card";
import "./Cuerpo.css";

export function Cuerpo() {
  return (
    <div className="container mt-4">
      <Card
        imagen={comidas4}
        clase="mb-4 foto1"
        descripcion="Restaurantes de comida rápida, comida china y saludable."
      />
      <Card
        imagen={farmacia}
        clase="mb-4 foto2"
        descripcion="Farmacias 24 hs, conseguí tu medicamento en el momento."
      />
    </div>
  );
}
