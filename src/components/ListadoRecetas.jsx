import useRecetas from "../hooks/useRecetas";
import Receta from "./Receta";

const ListadoRecetas = () => {
  const { recetas } = useRecetas();

  return (
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {recetas.map((receta, i) => (
          <Receta key={i} receta={receta} />
        ))}
      </div>
    </div>
  );
};

export default ListadoRecetas;
