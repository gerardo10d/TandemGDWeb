import FlujoLibre from "pages/flujoLibre";
import Index from "pages";
import Pca from "pages/pca";
import PorticosConc from "pages/porticosConc";
import SuelosSucs from "pages/suelosSucs";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom"; /* importar router */
// import logo from './logo.svg'; // Todavía no se tiene un logo en la página
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="flujolibre" element={<FlujoLibre />} />
          <Route path="pca" element={<Pca />} />
          <Route path="porticosconc" element={<PorticosConc />} />
          <Route path="suelossucs" element={<SuelosSucs />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
