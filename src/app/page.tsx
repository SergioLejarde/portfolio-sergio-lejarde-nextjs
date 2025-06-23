'use client'
// 🟡 Esta línea le dice a Next.js que este archivo se debe ejecutar en el navegador (no en el servidor).
// Es obligatorio cuando usamos cosas interactivas o animaciones como `framer-motion`.

import { motion } from 'framer-motion'
// 📦 Importamos `motion` desde la librería `framer-motion`, que nos permite animar elementos de React de forma fluida y profesional.

export default function HomePage() {
  // 🧱 Creamos un componente llamado HomePage, que será tu página de inicio.
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {/* 
        🖼️ Este `div` actúa como contenedor general del contenido de la página.
        - `flex flex-col`: usamos flexbox en columna (primero el título, luego el subtítulo).
        - `items-center`: alinea todo horizontalmente al centro.
        - `justify-center`: centra verticalmente en la pantalla.
        - `min-h-screen`: ocupa como mínimo toda la altura de la pantalla.
        - `text-center`: centra el texto horizontalmente.
      */}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        // 🔽 `initial`: el valor inicial de la animación. Empieza invisible (`opacity: 0`) y 20px más arriba (`y: -20`).

        animate={{ opacity: 1, y: 0 }}
        // 🔼 `animate`: el estado final. Se vuelve visible (`opacity: 1`) y vuelve a su posición normal (`y: 0`).

        transition={{ duration: 1, ease: 'easeOut' }}
        // ⏱️ `transition`: controla la duración y la suavidad de la animación. Dura 1 segundo con un efecto suave al final.

        className="text-5xl md:text-6xl font-bold text-white tracking-wide"
        // 🎨 Estilos Tailwind para el título:
        // - `text-5xl` y `md:text-6xl`: tamaño de letra muy grande, adaptado a pantallas medianas.
        // - `font-bold`: texto en negrita.
        // - `text-white`: texto blanco.
        // - `tracking-wide`: espaciado entre letras más amplio.
      >
        Sergio Lejarde
        {/* 🧑 Tu nombre completo como título principal */}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        // 🔽 Empieza invisible y 10px más abajo.

        animate={{ opacity: 1, y: 0 }}
        // 🔼 Se vuelve visible y sube a su posición normal.

        transition={{ duration: 1, delay: 0.4 }}
        // ⏱️ Dura 1 segundo pero empieza 0.4 segundos después del título.

        className="mt-4 text-lg text-gray-300"
        // 🎨 Estilos para el subtítulo:
        // - `mt-4`: margen superior para separarlo del título.
        // - `text-lg`: texto tamaño grande.
        // - `text-gray-300`: gris claro (contraste suave sobre fondo negro).
      >
        Frontend & Backend Developer
        {/* 💼 Tu rol como desarrollador */}
      </motion.p>
    </div>
  )
}


//archivo #4

/*¿Qué estamos haciendo ahora?
Estamos creando el contenido principal de tu página de inicio, lo que en Next.js se define como:
page.tsx
→ Es la página que se muestra cuando alguien entra a tu sitio en /.
→ Su rol es mostrar tu presentación inicial como desarrollador.
→ Visualmente corresponde a lo que Keita muestra en su portada. */

/*¿Qué tecnologías estamos usando aquí?
✅ framer-motion
Librería de animaciones para React.

Nos permite animar cosas como: entrada suave, desvanecimientos, transiciones.

Es profesional, fluido, moderno y ampliamente usado en frontend.

 */

/*Ubicación del archivo
📄 Archivo: src/app/page.tsx

🧠 ¿Por qué va ahí?

Porque Next.js espera encontrar una página inicial en src/app/page.tsx.

Esta es la ruta raíz del sitio (/), equivalente al "Home". */