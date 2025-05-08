import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";


export const metadata: Metadata = {
  title: "La Herradura Spa",
  description: "Envios de paquetería",
  // Icono de la página
  icons: {
    icon: { url: "/favicon.ico" }
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <footer>
          <div className="w-full px-8 py-2 md:px-4 md:py-2 mx-auto text-center pt-2 bg-red-700 text-white footer-text">
            2025 © La Herradura SPA | Todos los derechos reservados
          </div>
        </footer>
      </body>
    </html>
  )
}
