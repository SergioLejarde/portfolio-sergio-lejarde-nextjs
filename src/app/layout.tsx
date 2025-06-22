export const metadata = {
  title: "Portfolio | Sergio Lejarde",
  description: "Desarrollador Fullstack con enfoque en soluciones web modernas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-b from-white via-gray-100 to-black text-white min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
