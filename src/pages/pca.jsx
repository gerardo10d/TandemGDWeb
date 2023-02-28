import InputPca from "components/InputPca";
import InputPcaReps from "components/InputPcaReps";

import React, { useEffect, useState } from "react";

const Pca = () => {
  const [k, setK] = useState(0);
  const [Df, setDf] = useState();
  const [filasEjes, setfilasEjes] = useState(3);

  useEffect(() => {
    
  }, [filasEjes])

  const enviarResultado = () => {
    // console.log("El valor del módulo de reacción es: ", k);
    setDf(2 * k);
  };

  return (
    <>
      <h2 className="m-4 text-2xl text-center font-bold">
        Programa para diseño de pavimento rígido con el método de la PCA
      </h2>
      <div className="flex flex-col justify-around border-2 border-gray-300 rounded-2xl p-2 m-5">
        <form className="flex flex-col gap-4 items-center border-2 border-gray-200 rounded-md m-2 p-2">
          <h3 className="text-center font-bold">
            Características del pavimento rígido
          </h3>
          <div className="flex gap-4">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="dovelas">
                Dovelas:
                <select
                  defaultValue={"Sí"}
                  className="mx-2 p-1 w-20 border border-gray-400 rounded-md focus:outline-none"
                  name="dovelas"
                  id="dovelas"
                >
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
                </select>
              </label>
              <label htmlFor="bermas">
                Bermas:
                <select
                  defaultValue={"No"}
                  className="mx-2 p-1 w-20 border border-gray-400 rounded-md focus:outline-none"
                  name="bermas"
                  id="bermas"
                >
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="modReaccion">
                Módulo de reacción:
                <input
                  required
                  className="mx-2 p-1 appearance-none w-20 border border-gray-400 rounded-md focus:outline-none"
                  type="number"
                  name="modReaccion"
                  id="modReaccion"
                  min="0"
                  onChange={(e) => {
                    setK(e.target.value);
                  }}
                />
                <select
                  className="mx-2 p-1 w-24 border border-gray-400 rounded-md focus:outline-none"
                  name="unidadesK"
                  id="unidadesK"
                >
                  <option value="MPa/m">MPa/m</option>
                  <option value="pci">pci</option>
                  <option value="kg/cm3">kg/cm3</option>
                </select>
              </label>

              <label htmlFor="modRotura">
                Módulo de rotura:
                <input
                  required
                  className="mx-2 p-1 appearance-none w-20 border border-gray-400 rounded-md focus:outline-none"
                  type="number"
                  name="modRotura"
                  id="modRotura"
                  min="0"
                />
                <select
                  className="mx-2 p-1 w-24 border border-gray-400 rounded-md focus:outline-none"
                  name="unidades-mr"
                  id="unidades-mr"
                >
                  <option value="MPa">MPa</option>
                  <option value="psi">psi</option>
                  <option value="kg/cm2">kg/cm2</option>
                </select>
              </label>
            </div>
          </div>

          {/* <div className="flex justify-center gap-8"></div> */}
          {/* <div className="flex justify-center gap-8"></div> */}
          <label htmlFor="espesor">
            Espesor de prueba:
            <input
              required
              className="mx-2 p-1 appearance-none w-20 border border-gray-400 rounded-md focus:outline-none"
              type="number"
              name="espesor"
              id="espesor"
              min="0"
            />
            <select
              className="mx-2 p-1 w-15 border border-gray-400 rounded-md focus:outline-none"
              name="unidades-h"
              id="unidades-h"
            >
              <option value="cm">cm</option>
              <option value="in">in</option>
            </select>
          </label>
          <div className="flex justify-center gap-8">
            <button
              className="bg-green-700 text-white rounded-lg px-3"
              type="button"
              onClick={enviarResultado}
            >
              Enviar
            </button>
            <button
              className="bg-gray-800 text-white rounded-lg px-3"
              type="reset"
            >
              Reset
            </button>
          </div>
        </form>

        <section className="flex flex-col gap-4 border-2 border-gray-200 rounded-md m-2 p-2">
          <h3 className="text-center font-bold">
            Cargas y repeticiones del tránsito
          </h3>
          <div className="flex justify-center gap-10">
            <label htmlFor="unidades-carga">
              Unidades de la carga:
              <select
                className="p-1 mx-2 w-20 border border-gray-400 rounded-md focus:outline-none"
                name="unidades-carga"
                id="unidades-carga"
              >
                <option value="ton">ton</option>
                <option value="kN">kN</option>
                <option value="kip">kip</option>
              </select>
            </label>

            <label htmlFor="FSC">
              Factor de seguridad de carga:
              <select
                className="p-1 mx-2 w-20 border border-gray-400 rounded-md focus:outline-none"
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
            </label>

            <label htmlFor="filas-carga">
              Número de filas de ejes:
              <input
                required
                className="p-1 mx-2 appearance-none w-20 border border-gray-400 rounded-md focus:outline-none"
                type="number"
                name="filas-carga"
                id="filas-carga"
                defaultValue={3}
                min={3}
                max={20}
                onChange={(e) => {
                  setfilasEjes(e.target.value);
                }}
              />
            </label>
          </div>
          <form className="flex justify-center gap-10" action="">
            <div className="flex flex-col items-center border-2 border-gray-200 rounded-md p-2">
              <span>Ejes simples</span>
              <div className="flex gap-1">
                {/* Input de carga de eje */}
                <div className="flex flex-col items-center gap-y-0.5">
                  <span>Carga</span>
                  <input
                    className="p-1 appearance-none w-20 h-7 border border-gray-400 rounded-md focus:outline-none"
                    type="number"
                    min="0"
                  />
                  <input
                    className="p-1 appearance-none w-20 h-7 border border-gray-400 rounded-md focus:outline-none"
                    type="number"
                    min="0"
                  />
                  <input
                    className="p-1 appearance-none w-20 h-7 border border-gray-400 rounded-md focus:outline-none"
                    type="number"
                    min="0"
                  />
                  {}
                </div>

                {/* Input de repeticiones de ejes */}
                <div className="flex flex-col items-center gap-y-0.5">
                  <span># Ejes</span>
                  <input
                    className="p-1 appearance-none w-28 h-7 border border-gray-400 rounded-md focus:outline-none"
                    type="number"
                    min="0"
                  />
                  <input
                    className="p-1 appearance-none w-28 h-7 border border-gray-400 rounded-md focus:outline-none"
                    type="number"
                    min="0"
                  />
                  <input
                    className="p-1 appearance-none w-28 h-7 border border-gray-400 rounded-md focus:outline-none"
                    type="number"
                    min="0"
                  />
                </div>
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
        </section>
        <section className="flex flex-col gap-4 items-center border-2 border-gray-200 rounded-md m-2 p-2">
          <h3 className="font-bold">Resultados del análisis</h3>
          <div className="flex justify-center gap-8">
            <label htmlFor="dfatiga">
              Daño por fatiga:
              <input
                className="m-2 p-1 appearance-none w-28 border border-gray-400 rounded-md focus:outline-none"
                type="number"
                name="dfatiga"
                id="dfatiga"
                value={Df}
                disabled
              />
            </label>
            <label htmlFor="derosion">
              Daño por erosión:
              <input
                className="m-2 p-1 appearance-none w-28 border border-gray-400 rounded-md focus:outline-none"
                type="number"
                name="derosion"
                id="derosion"
                disabled
              />
            </label>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pca;
