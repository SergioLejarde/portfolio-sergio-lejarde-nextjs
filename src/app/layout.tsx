import "./global.css";

export const metadata = {
  title: "Portfolio | Sergio Lejarde",
  description: "Desarrollador Fullstack con enfoque en soluciones web modernas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white p-10">
        <h1 className="text-4xl font-bold text-red-500">¿Tailwind funciona?</h1>
        {children}
      </body>
    </html>
  );
}
