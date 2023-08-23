import React from "react";
import useRecetas from "../hooks/useRecetas";

const Receta = ({ receta }) => {
  const { handleRecetaId } = useRecetas();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        className="h-64 w-full object-cover"
        src={receta.strMealThumb}
        alt="Imagen de la tarjeta"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {receta.strMeal}
        </h2>

        <button
          onClick={() => {
            handleRecetaId(receta.idMeal);
          }}
          className="w-full bg-gradient-to-r
             from-purple-500 to-violet-500 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-violet-600 cursor-pointer transition-all duration-300"
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
};

export default Receta;
