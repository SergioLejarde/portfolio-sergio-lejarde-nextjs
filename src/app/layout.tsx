// 📄 Este archivo define la estructura principal de toda la app (layout global)

// ✅ Importamos el archivo de estilos globales
import './global.css'

// ✅ Importamos el componente de fondo animado (lo que hicimos antes)
import NoiseBackground from '@/components/NoiseBackground'

// 🧠 Definimos información de metadata (útil para SEO y títulos en pestañas del navegador)
export const metadata = {
  title: 'Sergio Lejarde | Portafolio',     // 🪪 Título que se mostrará en la pestaña del navegador
  description: 'Frontend & Backend Developer', // 📝 Descripción de tu sitio web
}

// 🧩 Este componente es el layout raíz, Next.js lo llama automáticamente
export default function RootLayout({
  children, // ⬇️ Esto representa el contenido que cambia en cada página (como page.tsx o projects/page.tsx)
}: {
  children: React.ReactNode // 👈 Esto es una anotación de TypeScript que dice que `children` es un "bloque de React"
}) {
  return (
    // 🧱 Elemento raíz HTML, con idioma en inglés
    <html lang="en" className="bg-black text-white">
      <body className="relative min-h-screen overflow-hidden font-mono">
        {/* 🎨 Fondo animado que pusimos con canvas, va detrás de todo */}
        <NoiseBackground />

        {/* 📦 Contenido principal del sitio (páginas y secciones), por encima del fondo */}
        <main className="relative z-10 p-6">
          {children} {/* 👈 Aquí se inyectan las páginas como Home, Projects, etc. */}
        </main>
      </body>
    </html>
  )
}

//archivo #3

/*¿Qué es layout.tsx y para qué sirve?
layout.tsx es un layout raíz.
Es decir, define la estructura general que comparten todas las páginas del sitio. Por ejemplo:

Fondo común (como el fondo animado).

Menús, headers, footers.

Tipografía y configuración general.

Todo lo que no cambia entre una página y otra.

Piensa que layout.tsx es como el marco de un cuadro, y cada página (page.tsx, projects/page.tsx, etc.) es el lienzo que se coloca dentro de ese marco.*/


/*¿Qué conseguimos con esto?
Elemento::¿Para qué sirve?
html, body= Estructura base del HTML
global.css=	Aplica estilos globales como fondo y tipografía
NoiseBackground= Agrega el fondo animado visual
children=	Muestra el contenido de cada página
z-10 y relative=	Asegura que el contenido esté por encima del canvas */

/*¿Qué es SEO y para qué sirve?
SEO = Search Engine Optimization
(traducido: optimización para motores de búsqueda)

🎯 ¿Para qué sirve?
Para que tu sitio aparezca en los resultados de Google (u otros buscadores) cuando alguien busca por tu nombre, proyectos o habilidades.

📦 ¿Qué cosas ayudan al SEO en tu portafolio?
Elemento::¿Para qué sirve?
metadata.title=	Es el título que aparece en la pestaña del navegador y en resultados de Google.
metadata.description=	Descripción corta que se muestra debajo del título en buscadores.
Encabezados (<h1>, <h2>)=	Le dicen a Google qué es importante en tu página.
Texto visible (no solo imágenes)=	Ayuda a que Google entienda de qué trata tu sitio.
Buen rendimiento=	Un sitio rápido mejora tu posición en resultados. */