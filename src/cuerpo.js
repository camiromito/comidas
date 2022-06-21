import React from "react";
import comidas4 from "./assets/images/comidas4.jpg";
import farmacia from "./assets/images/farmacia.jpg";
import golosinas3 from "./assets/images/golosinas3.jpg";
import gaseosa from "./assets/images/gaseosa.jpg";
import { Card } from "./Card";
import "./Cuerpo.css";

export function Cuerpo() {
  return (
    <div className="container mt-4">
      <Card
        imagen={comidas4}
        clase="mb-4 foto"
        descripcion="Restaurantes de comida rápida, comida china y saludable."
        fuenteDescripcion="fuente-grande"
      />
      <Card
        imagen={farmacia}
        clase="mb-4 foto"
        descripcion="Farmacias 24 hs, conseguí tu medicamento en el momento."
        fuenteDescripcion="fuente-grande"
      />
      <Card
        imagen={golosinas3}
        clase="mb-4 foto"
        descripcion="Pedí tus golosinas en el momento, sin importar dónde estés."
        fuenteDescripcion="fuente-grande"
      />
       <Card
        imagen={gaseosa}
        clase="mb-4 foto"
        descripcion="Pedí tu bebida preferida."
        fuenteDescripcion="fuente-grande"
      />
    </div>
  );
}
