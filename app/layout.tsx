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
        {/* Top Banner info de envios*/}
        <div className="top-banner py-1 text-xs font-semibold tracking-wider">
          ✈️ ENVÍOS LOS MIÉRCOLES A TODA CUBA
        </div>
        <Navbar/>
        {children}
        <footer>
          <div className="footer h-16 flex items-center justify-center">
            <p>&copy; {new Date().getFullYear()} La Herradura SPA | Todos los derechos reservados</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
