import React from "react";
import { Link } from "react-router-dom";
import logo from "media/road2-64px.png"

const Header = () => {
  return (
    <header>
      <ul className="flex justify-around items-center p-3 bg-green-700 border-b border-gray-900 shadow-md">
        <li>
          <Link to="/">
            <img src={logo} alt="logo" className="w-10 border-2 border-gray-800 rounded-md" />
          </Link>
        </li>
        <li>
          <Link to="/pca">
            <button className="py-1.5 px-2.5 m-1.5 rounded-lg text-center text-white bg-gray-900 hover:bg-blue-800 hover:scale-110">
              Diseño PCA
            </button>
          </Link>
        </li>
        <li>
          <Link to="/flujolibre">
            <button className="py-1.5 px-2.5 m-1.5 rounded-lg text-center text-white bg-gray-900 hover:bg-blue-800 hover:scale-110">
              Diseño Flujo Libre
            </button>
          </Link>
        </li>
        <li>
          <Link to="/suelossucs">
            <button className="py-1.5 px-2.5 m-1.5 rounded-lg text-center text-white bg-gray-900 hover:bg-blue-800 hover:scale-110">
              Clasificación SUCS
            </button>
          </Link>
        </li>
        <li>
          <Link to="/porticosconc">
            <button className="py-1.5 px-2.5 m-1.5 rounded-lg text-center text-white bg-gray-900 hover:bg-blue-800 hover:scale-110">
              Pórticos de concreto
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
