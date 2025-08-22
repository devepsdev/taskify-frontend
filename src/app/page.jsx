const Home = () => {
  return (
    <main className="min-h-screen bg flex flex-col items-center justify-center px-6 py-12">
      <section className="max-w-3xl text-center">
        {/* Título principal */}
        <h1 className="text-4xl font-bold text-white mb-6">
          Proyecto Full Stack: Django REST + Next.js
        </h1>

        {/* Descripción */}
        <p className="text-lg text-gray-100 mb-4">
          Este proyecto es una aplicación Full Stack que combina un backend en{" "}
          <span className="font-semibold text-gray-400">
            Django REST Framework{" "}
          </span>
          con un frontend en{" "}
          <span className="font-semibold text-gray-400">
            Next.js y TailwindCSS
          </span>
          .
        </p>

        <p className="text-lg text-gray-100 mb-8">
          El backend gestiona la API con autenticación y control de permisos,
          utilizando modelos, viewsets, routers y serializadores. La base de
          datos es <span className="font-semibold">SQLite3</span>. El frontend
          consume esa API, mostrando una interfaz intuitiva para crear, leer,
          actualizar y eliminar tareas.
        </p>

        {/* Espacio para el GIF animado */}
        <div className="w-full border rounded-lg shadow-md bg p-4 mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">
            Demostración en acción
          </h2>
          <div className="flex justify-center">
            {/* Aquí pondrás tu gif */}
            <img
              src="Animation.gif"
              alt="Demostración del proyecto"
              className="rounded-md shadow-lg max-h-96"
            />
          </div>
        </div>

        {/* Tecnologías */}
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
          Tecnologías utilizadas
        </h2>
        <ul className="grid grid-cols-2 gap-4 text-left text-gray-400">
          <li>✅ Django REST Framework</li>
          <li>✅ SQLite3</li>
          <li>✅ Viewsets & Routers</li>
          <li>✅ CORS Headers</li>
          <li>✅ Next.js</li>
          <li>✅ TailwindCSS</li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
