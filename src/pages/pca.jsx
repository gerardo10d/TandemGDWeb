import InputPca from "components/InputPca";
import InputPcaReps from "components/InputPcaReps";

function Pca() {
  return (
    <section>
      <h2 className="m-4 text-2xl text-center font-bold">
        Programa para diseño de pavimento rígido con el método de la PCA
      </h2>
      <div className="flex justify-around border-2 border-gray-300 rounded-2xl p-2 m-5">
        <div>
          <h3 className="text-center font-bold">Pavimento</h3>
          <form
            className="flex flex-wrap flex-col border-2 border-gray-200 rounded-md p-2"
            action=""
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="dovelas">Dovelas:</label>
                  </td>
                  <td>
                    <select
                      className="p-1 w-20 h-7 border border-gray-400 rounded-md focus:outline-none"
                      name="dovelas"
                      id="dovelas"
                    >
                      <option value="Sí" selected>
                        Sí
                      </option>
                      <option value="No">No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="bermas">Bermas:</label>
                  </td>
                  <td>
                    <select
                      className="p-1 w-20 h-7 border border-gray-400 rounded-md focus:outline-none"
                      name="bermas"
                      id="bermas"
                    >
                      <option value="Sí">Sí</option>
                      <option value="No" selected>
                        No
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="modReaccion">Módulo de reacción:</label>
                  </td>
                  <td>
                    <input
                      required
                      className="p-1 appearance-none w-20 h-7 border border-gray-400 rounded-md focus:outline-none"
                      type="number"
                      name="modReaccion"
                      id="modReaccion"
                      min="0"
                    />
                  </td>
                  <td>
                    <select name="unidadesK" id="unidadesK">
                      <option value="MPa/m">MPa/m</option>
                      <option value="pci">pci</option>
                      <option value="kg/cm3">kg/cm3</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="modRotura">Módulo de rotura:</label>
                  </td>
                  <td>
                    <input
                      required
                      className="p-1 appearance-none w-20 h-7 border border-gray-400 rounded-md focus:outline-none"
                      type="number"
                      name="modRotura"
                      id="modRotura"
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
                    <label htmlFor="espesor">Espesor de prueba:</label>
                  </td>
                  <td>
                    <input
                      required
                      className="p-1 appearance-none w-20 h-7 border border-gray-400 rounded-md focus:outline-none"
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

        <div className="flex flex-col gap-4">
          <h3 className="text-center font-bold">Tránsito</h3>
          <div className="flex justify-center gap-8">
            <div className="flex gap-2 ">
              <label htmlFor="unidades-carga">Unidades de la carga:</label>
              <select
                className="p-1 w-20 h-7 border border-gray-400 rounded-md focus:outline-none"
                name="unidades-carga"
                id="unidades-carga"
              >
                <option value="ton">ton</option>
                <option value="kN">kN</option>
                <option value="kip">kip</option>
              </select>
            </div>
            <div className="flex gap-2 ">
              <label htmlFor="FSC">Factor de seguridad de carga:</label>
              <select
                className="p-1 w-20 h-7 border border-gray-400 rounded-md focus:outline-none"
                name="FSC"
                id="FSC"
              >
                <option value="1.0">1.0</option>
                <option value="1.1">1.1</option>
                <option value="1.2">1.2</option>
                <option value="1.3">1.3</option>
                <option value="1.4">1.4</option>
                <option value="1.5">1.5</option>
              </select>
            </div>
          </div>
          <form className="flex gap-3" action="">
            <div className="flex flex-col items-center border-2 border-gray-200 rounded-md p-2">
              <span>Ejes simples</span>
              <div className="flex gap-1">
                <InputPca />
                <InputPcaReps />
              </div>
            </div>
            <div className="flex flex-col items-center border-2 border-gray-200 rounded-md p-2">
              <span>Ejes tándem</span>
              <div className="flex gap-1">
                <InputPca />
                <InputPcaReps />
              </div>
            </div>
            <div className="flex flex-col items-center border-2 border-gray-200 rounded-md p-2">
              <span>Ejes trídem</span>
              <div className="flex gap-1">
                <InputPca />
                <InputPcaReps />
              </div>
            </div>
          </form>
        </div>
      </div>

      <h3 className="text-center font-bold">Datos de salida</h3>
      <div className="flex justify-center gap-8">
        <div className="flex flex-col items-center">
          <label htmlFor="dfatiga">Daño por fatiga:</label>
          <input
            className="p-1 appearance-none w-28 h-7 border border-gray-400 rounded-md focus:outline-none"
            type="number"
            name="dfatiga"
            id="dfatiga"
            disabled
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="derosion">Daño por erosión:</label>
          <input
            className="p-1 appearance-none w-28 h-7 border border-gray-400 rounded-md focus:outline-none"
            type="number"
            name="derosion"
            id="derosion"
            disabled
          />
        </div>
      </div>
    </section>
  );
}

export default Pca;
