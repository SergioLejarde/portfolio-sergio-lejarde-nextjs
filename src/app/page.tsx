"use client";

import "./global.css";
import "@aws-amplify/ui-react/styles.css";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-3xl font-semibold text-indigo-300 mb-6">
        Esto es una prueba de estilos Tailwind
      </h2>

      <p className="text-white text-lg mb-4">
        Si ves este texto blanco sobre fondo negro y un botón estilizado, Tailwind funciona.
      </p>

      <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg">
        Botón de prueba
      </button>
    </main>
  );
}
