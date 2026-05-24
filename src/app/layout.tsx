import type { Metadata } from 'next'
import './global.css'
import NoiseBackground from '@/components/NoiseBackground'

export const metadata: Metadata = {
  title: 'Sergio Lejarde | Full-stack Developer',
  description:
    'Portafolio de Sergio Lejarde: desarrollo full-stack, automatización, IA aplicada, cloud, proyectos académicos y soluciones para clientes.',
  keywords: [
    'Sergio Lejarde',
    'full-stack developer',
    'portfolio',
    'Next.js',
    'React',
    'AWS',
    'AI evaluation',
    'Bucaramanga',
  ],
  openGraph: {
    title: 'Sergio Lejarde | Full-stack Developer',
    description: 'Portafolio profesional, experiencia, proyectos y stack técnico.',
    url: 'https://www.sergiolejarde.com',
    siteName: 'Sergio Lejarde Portfolio',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-black">
      <body>
        <NoiseBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
