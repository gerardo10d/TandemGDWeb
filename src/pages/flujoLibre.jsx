const FlujoLibre = () => {
  return (
    <>
      <h2 className="m-4 text-2xl text-center font-bold">
        Programa para diseño de conductos a flujo libre
      </h2>
      <div className="flex justify-center border-2 border-gray-300 rounded-2xl p-2 m-5">
        <form className="flex flex-col gap-3">
          <label htmlFor="caudal">
            Caudal :
            <input
              className="mx-2 p-1 appearance-none w-20 border border-gray-400 rounded-md focus:outline-none"
              type="number"
              name="caudal"
              min="0"
            />
            <select
              className="mx-2 p-1 w-24 border border-gray-400 rounded-md focus:outline-none"
              name="unidadesCaudal"
            >
              <option value="L/s">L/s</option>
              <option value="m3/s">m3/s</option>
            </select>
          </label>
          <label htmlFor="cotaSup">
            Cota superior (m) :
            <input
              className="mx-2 p-1 appearance-none w-20 border border-gray-400 rounded-md focus:outline-none"
              type="number"
              name="cotaSup"
              min="0"
            />
          </label>
          <label htmlFor="cotaInf">
            Cota inferior (m) :
            <input
              className="mx-2 p-1 appearance-none w-20 border border-gray-400 rounded-md focus:outline-none"
              type="number"
              name="cotaInf"
              min="0"
            />
          </label>
          <label htmlFor="longitud">
            Longitud (m) :
            <input
              className="mx-2 p-1 appearance-none w-20 border border-gray-400 rounded-md focus:outline-none"
              type="number"
              name="longitud"
              min="0"
            />
          </label>
          <label htmlFor="material">
            Material :
            <select
              className="mx-2 p-1 w-24 border border-gray-400 rounded-md focus:outline-none"
              name="tipoMaterial"
            >
              <option value="concreto">Concreto</option>
              <option value="pvc">PVC</option>
            </select>
          </label>
          <div className="flex justify-center gap-8">
            <button
              className="bg-green-700 text-white rounded-lg px-3"
              type="button"
            //   onClick={}
            >
              Enviar
            </button>
            <button
              className="bg-gray-800 text-white rounded-lg px-3"
              type="button"
            //   onClick={reset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FlujoLibre;
