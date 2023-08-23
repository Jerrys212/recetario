import { useState } from "react";
import useRecetas from "../hooks/useRecetas";
import Alerta from "./Alerta";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nacionalidad: "",
    categoria: "",
  });
  const [alerta, setAlerta] = useState("");
  const { nacionalidades, categorias, consultarReceta } = useRecetas();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos Los Campos Son Obligatorios!");
      return;
    }

    console.log("first");
    setAlerta("");
    consultarReceta(busqueda);
  };

  return (
    <>
      <div className="container px-10 mx-auto">
        {alerta && <Alerta>{alerta}</Alerta>}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Nacionalidad
              </label>
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nacionalidad"
                name="nacionalidad"
                value={busqueda.nacionalidad ?? "def"}
                onChange={(e) =>
                  setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
                }
              >
                <option value={"def"}>--- Selecione Nacionalidad ---</option>
                {nacionalidades.map((nacionalidad, i) => (
                  <option key={i} value={nacionalidad.strArea}>
                    {nacionalidad.strArea}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2 ml-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Categoria
              </label>
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="categoria"
                name="categoria"
                value={busqueda.categoria ?? "def"}
                onChange={(e) =>
                  setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
                }
              >
                <option value={"def"}>--- Seleccione Categoria ---</option>
                {categorias.map((categoria, i) => (
                  <option key={i} value={categoria.strCategory}>
                    {categoria.strCategory}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            className="w-full bg-gradient-to-r
             from-purple-500 to-violet-500 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-violet-600 cursor-pointer transition-all duration-300"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </div>
    </>
  );
};

export default Formulario;
