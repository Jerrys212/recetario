import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const RecetasContext = createContext();

const RecetasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [nacionalidades, setNacionalidades] = useState([]);
  const [recetas, setRecetas] = useState([]);
  const [recetaId, setRecetaId] = useState("");
  const [receta, setReceta] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list?";
        const { data } = await axios(url);
        setCategorias(data.meals);
      } catch (error) {
        console.log(error);
      }
    };

    const obtenerNacionalidades = async () => {
      try {
        const url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list?";
        const { data } = await axios(url);
        setNacionalidades(data.meals);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerCategorias();
    obtenerNacionalidades();
  }, []);

  const consultarReceta = async (datos) => {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${datos.nacionalidad}&c=${datos.categoria}`;
      const { data } = await axios(url);
      setRecetas(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRecetaId = (id) => {
    setRecetaId(id);
  };

  useEffect(() => {
    setCargando(true);
    const obtenerReceta = async () => {
      try {
        if (!recetaId) return;
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recetaId}`;
        const { data } = await axios(url);
        setReceta(data.meals[0]);
        return Swal.fire({
          title: receta.strMeal,
          text: receta.strInstructions,
          imageUrl: receta.strMealThumb,
          imageWidth: "100%",
          imageHeight: 400,
          width: 500,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setCargando(false);
      }
    };
    obtenerReceta();
  }, [recetaId]);

  return (
    <RecetasContext.Provider
      value={{
        nacionalidades,
        categorias,
        consultarReceta,
        recetas,
        handleRecetaId,
        receta,
        setReceta,
        cargando,
      }}
    >
      {children}
    </RecetasContext.Provider>
  );
};

export { RecetasProvider };
export default RecetasContext;
