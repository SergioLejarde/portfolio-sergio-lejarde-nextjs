"use client";

import "./global.css";
import "@aws-amplify/ui-react/styles.css";

export default function App() {
  const todos = [
    "Diseñar portafolio en Next.js",
    "Aplicar a trabajos remotos",
    "Conectar dominio personalizado",
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-5xl font-bold text-white mb-10 tracking-tight">MI PORTAFOLIO</h1>

      <button
        onClick={() => alert("Agrega lógica si conectas backend luego")}
        className="mb-6 rounded-xl bg-gray-900 text-white px-6 py-3 hover:border-2 hover:border-indigo-400 transition"
      >
        + new
      </button>

      <ul className="w-full max-w-xl bg-white rounded-lg divide-y divide-gray-300 shadow-lg">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="px-6 py-4 text-gray-900 hover:bg-indigo-100 transition font-medium"
          >
            {todo}
          </li>
        ))}
      </ul>

      <div className="text-center text-sm text-gray-300 mt-12">
        🥳 App successfully hosted. Puedes personalizar este contenido a tu gusto.
        <br />
        <a
          href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/"
          className="text-blue-400 underline mt-2 inline-block"
          target="_blank"
        >
          Revisa los siguientes pasos.
        </a>
      </div>
    </main>
  );
}
