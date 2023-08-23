import Formulario from "./components/Formulario";
import ListadoRecetas from "./components/ListadoRecetas";
import { RecetasProvider } from "./context/RecetasProvider";

function App() {
  return (
    <>
      {/**https://www.themealdb.com/api/json/v1/1/list.php?c=list?a=
       * https://www.themealdb.com/api/json/v1/1/list.php?a=list
       * https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian&c=beef
       */}
      <header className="bg-violet-700 p-5 ">
        <div className="container flex justify-between items-center mx-auto px-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-tools-kitchen-2"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
          </svg>
          <h1 className="text-center text-4xl text-white">Recetario</h1>
        </div>
      </header>

      <RecetasProvider>
        <main className="mt-5">
          <Formulario />
          <ListadoRecetas />
        </main>
      </RecetasProvider>
    </>
  );
}

export default App;
