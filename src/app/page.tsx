"use client";

import "./global.css"; // Solo Tailwind
import "@aws-amplify/ui-react/styles.css";

export default function App() {
  const todos = [
    "Diseñar portafolio en Next.js",
    "Aplicar a trabajos remotos",
    "Conectar dominio personalizado",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-700 to-white flex flex-col items-center justify-center p-8 font-sans">
      <h1 className="text-4xl font-bold text-white mb-6">MI PORTAFOLIO</h1>

      <button
        onClick={() => alert("Agrega lógica si conectas backend luego")}
        className="mb-4 rounded-md bg-gray-900 text-white px-4 py-2 hover:border-2 hover:border-indigo-400 transition"
      >
        + new
      </button>

      <ul className="bg-black rounded-md overflow-auto divide-y divide-black w-full max-w-md mb-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="bg-white px-4 py-2 hover:bg-indigo-100 transition"
          >
            {todo}
          </li>
        ))}
      </ul>

      <div className="text-center text-sm text-gray-700 mt-4">
        🥳 App successfully hosted. Try editing this file or deploying updates.
        <br />
        <a
          href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/"
          className="text-blue-700 font-bold underline"
          target="_blank"
        >
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
