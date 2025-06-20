"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/global.css"; // Asegúrate que contiene solo @tailwind base, components, utilities
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-700 to-white flex flex-col items-center justify-center p-8 font-sans">
      <h1 className="text-4xl font-bold text-white mb-6">My todos</h1>

      <button
        onClick={createTodo}
        className="mb-4 rounded-md bg-gray-900 text-white px-4 py-2 hover:border-2 hover:border-indigo-400 transition"
      >
        + new
      </button>

      <ul className="bg-black rounded-md overflow-auto divide-y divide-black w-full max-w-md mb-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-white px-4 py-2 hover:bg-indigo-100 transition"
          >
            {todo.content}
          </li>
        ))}
      </ul>

      <div className="text-center text-sm text-gray-700 mt-4">
        🥳 App successfully hosted. Try creating a new todo.
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
