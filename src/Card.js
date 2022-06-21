import React from "react";
import "./Card.css";

export function Card(props) {
  return (
    <div className="card imagen-centrada">
      <img src={props.imagen} className={props.clase + " mt-4"} alt="..." />
      <div className="card-body">
        <p className={"card-text " + props.fuenteDescripcion}>
          {props.descripcion}
        </p>
      </div>
    </div>
  );
}
