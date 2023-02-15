import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul className="barra-nav">
        <li>
          <Link to="/">
            <button className="botonPrincipal">Inicio</button>
          </Link>
        </li>
        <li>
          <Link to="/pca">
            <button className="botonPrincipal">Diseño PCA</button>
          </Link>
        </li>
        <li>
          <Link to="/flujolibre">
            <button className="botonPrincipal">Diseño Flujo Libre</button>
          </Link>
        </li>
        <li>
          <Link to="/suelossucs">
            <button className="botonPrincipal">Clasificación SUCS</button>
          </Link>
        </li>
        <li>
          <Link to="/porticosconc">
            <button className="botonPrincipal">Pórticos de concreto</button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
