function App() {
  return (
    <>
      <div className="contenedor w-11/12 max-w-screen-lg m-auto mt-10">
        <header className="header bg-green-400 p-10 text-white">
          <h1>Header</h1>
        </header>

        <main className="contenido bg-white p-10 text-black">
          <h1>Test</h1>
          <p>lorem</p>
        </main>

        <aside className="sidebar bg-yellow-400 p-10 text-black min-h-100 flex items-center justify-center">Sidebar</aside>

        <div className="widget-1 bg-purple-400 p-10 text-white flex items-center justify-center">Widget 1</div>
        <div className="widget-2 bg-purple-400 p-10 text-white flex items-center justify-center">Widget 2</div>

        <footer className="footer bg-yellow-900 p-10 text-white">Footer</footer>

      </div>
    </>
  );
}

export default App;
