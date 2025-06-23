'use client' // 🔧 Obligatorio para que Next.js permita efectos y eventos del lado del cliente (como animaciones)

/* 📦 Importamos cosas de React */
import { useEffect, useRef } from 'react' // useEffect = para hacer cosas cuando el componente aparece; useRef = para apuntar al canvas directamente

/* 🚀 Este es el componente del fondo animado */
export default function NoiseBackground() {
  // 🎯 Creamos una referencia al canvas para poder dibujar sobre él directamente
  const canvasRef = useRef<HTMLCanvasElement>(null)

  /* 🧠 useEffect es un "efecto secundario": se ejecuta después de que el componente aparece en pantalla */
  useEffect(() => {
    // 📌 Obtenemos el canvas desde el DOM
    const canvas = canvasRef.current
    if (!canvas) return // 🛑 Si no se cargó el canvas aún, salimos

    // ✏️ Obtenemos el contexto de dibujo en 2D del canvas (con esto se puede dibujar píxeles)
    const ctx = canvas.getContext('2d')

    // ⏱️ Frame actual (cuántos dibujos han pasado)
    let frame = 0

    // 🎞️ Lista donde vamos a guardar varios cuadros de ruido precalculados
    const noiseFrames: ImageData[] = []

    // 🔁 Función para generar varias imágenes con ruido (como frames de una animación)
    const generateNoise = () => {
      const width = canvas.width     // 📏 Ancho del canvas
      const height = canvas.height   // 📐 Alto del canvas

      for (let i = 0; i < 10; i++) { // 🔄 Creamos 10 imágenes distintas de ruido
        const imageData = ctx!.createImageData(width, height) // 🧱 Creamos imagen vacía del tamaño del canvas
        for (let j = 0; j < imageData.data.length; j += 4) {  // 🎲 Por cada píxel (RGBA: 4 datos)
          const shade = Math.floor(Math.random() * 255)       // 🧮 Número aleatorio entre 0 y 255 (gris)
          imageData.data[j] = shade       // 🔴 Rojo
          imageData.data[j + 1] = shade   // 🟢 Verde
          imageData.data[j + 2] = shade   // 🔵 Azul
          imageData.data[j + 3] = 30      // 🔄 Opacidad (0 = invisible, 255 = opaco)
        }
        noiseFrames.push(imageData) // 💾 Guardamos cada frame
      }
    }

    // ▶️ Función para mostrar un frame de ruido en pantalla (como una animación infinita)
    const paint = () => {
      if (!ctx) return // 🛑 Si no hay contexto 2D, no se puede dibujar
      ctx.putImageData(noiseFrames[frame % noiseFrames.length], 0, 0) // 🖼️ Dibuja el frame actual en (0,0)
      frame++                     // 🔄 Aumentamos el contador de frames
      requestAnimationFrame(paint) // 🔁 Llamamos de nuevo la función en el próximo frame (animación infinita)
    }

    // 📏 Función que se ejecuta cuando cambia el tamaño de la ventana
    const resize = () => {
      canvas.width = window.innerWidth     // 📐 Actualiza el ancho al tamaño de la ventana
      canvas.height = window.innerHeight   // 📐 Actualiza el alto al tamaño de la ventana
      noiseFrames.length = 0               // ♻️ Borramos los frames anteriores
      generateNoise()                      // 🔁 Generamos nuevos frames con el nuevo tamaño
    }

    // ✅ Ejecutamos la función resize al iniciar
    resize()
    // ✅ Comenzamos la animación
    paint()
    // 🧩 Si el usuario cambia el tamaño del navegador, ejecutamos resize
    window.addEventListener('resize', resize)

    // 🧹 Limpieza cuando el componente se destruye (buena práctica)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, []) // 🔚 Solo se ejecuta una vez cuando el componente carga

  /* 🎨 Finalmente, retornamos el canvas que usaremos como fondo */
  return (
    <canvas
      ref={canvasRef}                               // 🖱️ Conectamos el canvas con la referencia
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" // 🎯 Ocupa toda la pantalla, debajo de todo, no interactúa con el mouse
    />
  )
}



//archivo #2

/*Vamos a crear un fondo animado con efecto de “ruido” o "noise" como el que se ve en el fondo del sitio de Keita Yamada:

📺 Imagina una pantalla vieja de televisión que no tiene señal. Ese "ruido" visual que parece estático blanco y negro moviéndose... eso es noise animation.

*/

/*¿Qué tecnología usaremos?
Usaremos un <canvas> de HTML.
Un <canvas> es una superficie gráfica en blanco sobre la que tú puedes dibujar, como si fuera un lienzo con pintura pero usando código. Se usa mucho en efectos visuales, juegos o gráficos.*/

/*¿Dónde vamos a poner el código?
En una carpeta llamada components, dentro de src.

📁 ¿Por qué en components/?
Porque lo que estamos creando es un componente reutilizable. */

/*¿Qué es un componente?
En React (y por extensión en Next.js), un componente es:

Una pieza de la interfaz (como una sección, botón, fondo, navbar…).

Que se puede usar en distintas partes del sitio.

Que está separado en su propio archivo para mantener todo ordenado y limpio.

Entonces, el fondo animado es un componente de fondo visual, así que lo pondremos en:
src/components/NoiseBackground.tsx */

/*¿Qué hace este componente?
Dibuja en pantalla un fondo animado tipo “ruido visual”.

Lo pone debajo de todo (z-0 y fixed).

Se adapta al tamaño de la pantalla.

No bloquea clics (pointer-events-none). */