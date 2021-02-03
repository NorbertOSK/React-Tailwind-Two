function App() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
            alt="Man looking at item at a store"
          ></img>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Card de Prueba
          </div>
          <p className="mt-2 text-gray-500">
            Lorem, ipsum sit amet consectetur adipisicing elit. Deserunt minus excepturi esse dolor sapiente inventore pariatur cupiditate, cum hic non!
          </p>
          <h2 class="encabezado">Estilo personalizado en index.css</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
