import type { Metadata } from 'next'
import './global.css'
import NoiseBackground from '@/components/NoiseBackground'

export const metadata: Metadata = {
  title: 'Sergio Lejarde | Web Designer & Full-stack Developer',
  description:
    'Portfolio of Sergio Lejarde: web design, responsive UI, full-stack development, AI-assisted workflows and production-ready digital experiences.',
  keywords: [
    'Sergio Lejarde',
    'full-stack developer',
    'web designer',
    'UI design',
    'Figma',
    'portfolio',
    'Next.js',
    'React',
    'AWS',
    'AI evaluation',
    'Bucaramanga',
  ],
  openGraph: {
    title: 'Sergio Lejarde | Web Designer & Full-stack Developer',
    description: 'Professional portfolio with web design examples, experience and technical capabilities.',
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
