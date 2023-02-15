function Pca() {
  return (
    <section>
      <h2>Programa para diseño de pavimento rígido con el método de la PCA</h2>
      <div className="datos-entrada">
        <div>
          <h3>Pavimento:</h3>
          <form className="form-pavimento" action="">
            <table>
              <tbody>
                <tr>
                  <td>
                    <label for="dovelas">Dovelas:</label>
                  </td>
                  <td>
                    <select name="dovelas" id="dovelas">
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="bermas">Bermas:</label>
                  </td>
                  <td>
                    <select name="bermas" id="bermas" sele>
                      <option value="Sí">Sí</option>
                      <option value="No" selected>
                        No
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="mod-reaccion">Módulo de reacción:</label>
                  </td>
                  <td>
                    <input
                      required
                      className="input-numero"
                      type="number"
                      name="mod-reaccion"
                      id="mod-reaccion"
                      min="0"
                    />
                  </td>
                  <td>
                    <select name="unidades-k" id="unidades-k">
                      <option value="MPa/m">MPa/m</option>
                      <option value="pci">pci</option>
                      <option value="kg/cm3">kg/cm3</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="mod-rotura">Módulo de rotura:</label>
                  </td>
                  <td>
                    <input
                      required
                      className="input-numero"
                      type="number"
                      name="mod-rotura"
                      id="mod-rotura"
                      min="0"
                    />
                  </td>
                  <td>
                    <select name="unidades-mr" id="unidades-mr">
                      <option value="MPa">MPa</option>
                      <option value="psi">psi</option>
                      <option value="kg/cm2">kg/cm2</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="espesor">Espesor de prueba:</label>
                  </td>
                  <td>
                    <input
                      required
                      className="input-numero"
                      type="number"
                      name="espesor"
                      id="espesor"
                      min="0"
                    />
                  </td>
                  <td>
                    <select name="unidades-h" id="unidades-h">
                      <option value="cm">cm</option>
                      <option value="in">in</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="submit">Enviar</button>
                    <button type="reset">Reset</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>

        <div>
          <h3>Tránsito:</h3>
          <label for="unidades-carga">Unidades de la carga</label>
          <select name="unidades-carga" id="unidades-carga">
            <option value="ton">ton</option>
            <option value="kN">kN</option>
            <option value="kip">kip</option>
          </select>
          <br />
          <br />

          <label for="FSC">Factor de seguridad de carga</label>
          <select name="FSC" id="FSC">
            <option value="1.0">1.0</option>
            <option value="1.1">1.1</option>
            <option value="1.2">1.2</option>
            <option value="1.3">1.3</option>
            <option value="1.4">1.4</option>
            <option value="1.5">1.5</option>
          </select>
          <br />
          <br />

          <div className="titulos-ejes">
            <span>Ejes simples</span>
            <span>Ejes tándem</span>
            <span>Ejes trídem</span>
          </div>

          <form className="form-ejes" action="">
            <div className="grupo-ejes">
              <span>Carga</span>
              <span># Ejes</span>
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
            </div>
            <div className="grupo-ejes">
              <span>Carga</span>
              <span># Ejes</span>
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
            </div>
            <div className="grupo-ejes">
              <span>Carga</span>
              <span># Ejes</span>
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
              <input type="number" min="0" />
            </div>
          </form>
        </div>
      </div>

      <h3>Datos de salida:</h3>
      <label for="dfatiga">Daño por fatiga:</label>
      <input
        className="input-numero-salida"
        type="number"
        name="dfatiga"
        id="dfatiga"
        disabled
      />
      <br />
      <br />
      <label for="derosion">Daño por erosión:</label>
      <input
        className="input-numero-salida"
        type="number"
        name="derosion"
        id="derosion"
        disabled
      />
    </section>
  );
}

export default Pca;
